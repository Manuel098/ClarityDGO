import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import { Globals } from '../../globals';
import {Subscription} from 'rxjs';
import {HeaderComponent} from '../../header/header.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userType:any;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authSrv: AuthService, private globals: Globals, private router: Router, private headCompon: HeaderComponent) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
   }
  ngOnInit() {
    if (this.userIsAuthenticated) {
      this.globals.getUsType().then(res => {
        this.userType = res;
      });
    }
    else {
      this.userType = 0;
    }
    this.userIsAuthenticated = this.authSrv.getIsAuth();
    this.authListenerSubs = this.authSrv.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onFormSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Favor de llenar todos los campos');
      return;
    } else if (form.value.password !== form.value.password2) {
      alert('Las contraseñas no coniciden');
      return;
    } else {
    this.authSrv.createUserP(form.value.email, form.value.user, form.value.password);
    form.value.email = '';
    form.value.user = '';
    form.value.password = '';
    }
  }
}
