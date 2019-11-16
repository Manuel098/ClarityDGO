import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HeaderComponent } from '../../header/header.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  description:string;
  

  constructor(private authSrv: AuthService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;}
  ngOnInit() {
    
  }
  
  onFormSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.authSrv.login(form.value.email, form.value.password);
  }
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}