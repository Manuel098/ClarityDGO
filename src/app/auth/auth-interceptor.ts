import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  
  import { AuthService } from './auth.service';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      let authRequest = req.clone();
      if (!req.url.includes('block')) {
        const authToken = this.authService.getToken();
        authRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
      }
      return next.handle(authRequest);
    }
  }
  