import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { logging } from 'protractor';
import { Urls } from '../urls';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private lastSecionTimer: any;
  private userId: string;
  private typeUser;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  // Create users
  createUserP(email: string, user: string, password: string) {
    this.http.post(Urls.baseURL + '/users/signup/patient', {
      user: user,
      email: email,
      password: password
    }).subscribe(result => {
      this.login(email, password);
    });
  }
  createUserA(email: string, user: string, password: string) {
    this.http.post(Urls.baseURL + '/users/signup/admin', {
      user: user,
      email: email,
      password: password
    }).subscribe(result => {
      alert('Administrador creado!!');
      location.reload();
    });
  }
  createUserG(email: string, user: string, password: string, celnumber:string, array) {
    this.http.post(Urls.baseURL + '/users/signup/guidance', {
      user: user,
      email: email,
      celnumber:celnumber,
      password: password,
      array: array

    }).subscribe(result => {
      alert('Orientador creador!!');
      location.reload();
    });
  }
  // Sign service
  login(email: string, password: string) {
    const authData = { email: email, password: password };
    this.http
      .post<{UserType:string, token: string; expiresIn: number; userId: string;}>(Urls.baseURL + '/users/login',
        authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          console.log(response.UserType);
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.typeUser = response.UserType;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(token, expirationDate, this.userId);
          console.log(this.typeUser);
          switch (this.typeUser) {
            case "1":
              this.router.navigate(['questions']);
              break;
            case "2":
              this.router.navigate(['board']);
              break;
            case "3":
                this.router.navigate(['manageProfile']);
                break;
            default:
                this.router.navigate(['index']);
              break;
          }
        }
      }, error => {
        alert('Usuario o contraseña invalido!!');
        this.authStatusListener.next(false);
      });
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  logout() {
    this.timeOut();
    this.userId = null;
    this.token = null;
    this.authStatusListener.next(false);
    this.isAuthenticated = false;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }
  createProfile(firstQuestion1: string, firstQuestion2: string, firstQuestion3: string, firstQuestion4: string, 
    secondQuestion1: string, secondQuestion2: string, secondQuestion3: string, secondQuestion4:string,
    thirdQuestion1: string, thirdQuestion2: string, thirdQuestion3: string, thirdQuestion4:string,
    fourthQuestion1: string, fourthQuestion2: string) {
    this.http.post(Urls.baseURL + '/profile/create', {
      age: firstQuestion1,
      genre: firstQuestion2,
      maritals: firstQuestion3,
      occupation: firstQuestion4,
      economic: secondQuestion1,
      seek: secondQuestion2,
      lookingf: secondQuestion3,
      feel:secondQuestion4,
      problem: thirdQuestion1,
      problems: thirdQuestion2,
      think: thirdQuestion3,
      help: thirdQuestion4,
      before: fourthQuestion1,
      why:fourthQuestion2,
      user_id: this.userId
    }).subscribe(Response => {
      this.router.navigate(['/chat']);
      alert('Pre-perfil Creado!!');
      //this.router.navigate(['/profile']);
    });
  }
  private timeOut(){
    this.http.post(Urls.baseURL + '/users/logOut', {
      lastSession: this.lastSecionTimer,
      userId: this.userId
    });
  }
  // Auth Data
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }
}
