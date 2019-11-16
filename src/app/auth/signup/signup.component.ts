import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HeaderComponent } from '../../header/header.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  description:string;
  
  
  constructor(private authSrv: AuthService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
   }
  ngOnInit() {}

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
