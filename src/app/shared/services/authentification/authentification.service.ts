import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../../models/user.model';
import { API } from 'src/environments';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

export const JWT_NAME = 'user-token';


export interface LoginForm {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { }

  login(loginForm: LoginForm) {
    return this.http.post<any>(API + '/users/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map((token) => {
        localStorage.setItem(JWT_NAME, token.access_token);
        
        return token;
      } )
    )
  }

  logout() {
    localStorage.removeItem(JWT_NAME);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_NAME);
    return !this.jwtHelper.isTokenExpired(token);
  }

}
