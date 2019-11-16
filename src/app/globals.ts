import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Subscription, from } from 'rxjs';
import { logging, promise } from 'protractor';
import {Urls} from './urls';

@Injectable({ providedIn: 'root' })

export class Globals {
    // constructor(private http: HttpClient, private authSrv: AuthService, private router: Router) {}
    // // profile
    // getProfile() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/profile/patient/' + this.authSrv.getUserId())
    //         .subscribe(response => {
    //             res(response);
    //         });
    //     });
    // }

    // // boards
    // boardSelect(){
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/board')
    //         .subscribe(response => {
    //             res(response['fila']);
    //         });
    //     });
    // }
    // boardGuidance() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/board/get/guidance')
    //         .subscribe(response => {
    //             res(response['guidances']);
    //         });
    //     });
    // }
    // boardAdmin(){
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/board/get/admin')
    //         .subscribe(response => {
    //             res(response['guidances']);
    //         });
    //     });
    // }
    // boardPatient() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/board/get/patient')
    //         .subscribe(response => {
    //             res(response['guidances']);
    //         });
    //     });
    // }
    // // get
    // getUsType() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/users/uType/' + this.authSrv.getUserId())
    //         .subscribe(response => {
    //             res(response['userType']);
    //         });
    //     });
    // }
    // getLoggedInUser() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/users/user/' + this.authSrv.getUserId())
    //         .subscribe(response => {
    //             res(response['user']);
    //         });
    //     });
    // }
    // getLoggedIdUser() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/users/user/' + this.authSrv.getUserId())
    //         .subscribe(response => {
    //             res(response['_id']);
    //         });
    //     });
    // }
    // // set
    // setGuidance(id: string, id_guidance: string) {
    //     console.log(id);
    //     console.log(id_guidance);
    //     this.http.put(Urls.baseURL + '/users/insert/guidance/' + id, {
    //         id_guidance: id_guidance
    //     }).subscribe(response => {
    //         console.log(response);
    //     });
    // }
    // // chat
    // contactsGuidance() {
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/contact/guidance/' + this.authSrv.getUserId())
    //         .subscribe(response => {
    //             res(response['fila']);
    //         });
    //     });
    // }
    // contactPatient(){
    //     return new Promise(res => {
    //         this.http.get(Urls.baseURL + '/contact/patient/' + this.authSrv.getUserId())
    //         .subscribe(response => {
    //             res(response);
    //         });
    //     });
    // }
    // getChatRoomsChat(chatRoom) {
    //     console.log(chatRoom);
    //     return new Promise( res => {
    //         this.http.get(Urls.baseURL + '/chat/chatroom/' + chatRoom)
    //         .subscribe( response => {
    //             console.log(response);
    //             res(response);
    //         });
    //     });
    // }
    // UpdateChat(chatRoom: string, user: string, message: string) {
    //     console.log(chatRoom);
    //     return new Promise( res => {
    //         this.http.put(Urls.baseURL + '/chat/message/' + chatRoom, {
    //             user: user,
    //             message: message
    //         })
    //         .subscribe( response => {
    //             console.log(response);
    //             res(response);
    //         });
    //     });
    // }
    // // delete
    // deleteUser(id: string) {
    //     return new Promise( res => {
    //         this.http.delete(Urls.baseURL + '/users/delete/'+ id).subscribe(response => {
    //             console.log(response);
    //         });
    //     });
    // }
    // // update
    // updateUser(id: string, user: string, password: string) {
    //     if (user != null) {
    //         if (password != null) {
    //             return new Promise( res => {
    //                 this.http.post(Urls.baseURL + '/users/users', {
    //                     user: user,
    //                     _id: id,
    //                     password: password
    //                   }).subscribe(response => {
    //                     console.log(response);
    //                 });
    //             });
    //         } else{
    //             return new Promise( res => {
    //                 console.log(user);
    //                 this.http.post(Urls.baseURL + '/users/users', {
    //                     user: user,
    //                     _id: id
    //                   }).subscribe(response => {
    //                     console.log(response);
    //                 });
    //             });
    //         }
    //     } else {
    //         if(password != null) {
    //             return new Promise( res => {
    //                 this.http.post(Urls.baseURL + '/users/users', {
    //                     _id: id,
    //                     password: password
    //                   }).subscribe(response => {
    //                     console.log(response);
    //                 });
    //             });
    //         } else {
    //             return null;
    //         }
    //     }
    // }
}
