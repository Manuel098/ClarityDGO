import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Globals } from './globals';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule, MatNativeDateModule, MatIconModule,
  MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatDialogModule,
    MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatToolbarModule, MatNativeDateModule, MatIconModule,
    MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
