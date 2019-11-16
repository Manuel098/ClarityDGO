import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { Globals } from '../../globals';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private globals: Globals, private authSrv: AuthService, private headCompon: HeaderComponent) { }
  ngOnInit() {
  }
  closeModal() {
    
  }
  onFormSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.authSrv.login(form.value.email, form.value.password);
    this.closeModal();
  }
}
