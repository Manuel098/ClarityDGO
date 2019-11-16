import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Globals } from './globals';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './auth/signin/signin.component'

import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule, MatNativeDateModule, MatIconModule,
  MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule,MAT_DIALOG_DATA
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SigninComponent,
    FooterComponent,
    HeaderComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,
    AppRoutingModule,    BrowserAnimationsModule, HttpClientModule,
    MatButtonModule, MatCardModule, MatDialogModule,
    MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatToolbarModule, MatNativeDateModule, MatIconModule,
    MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SigninComponent]

})
export class AppModule { }
