import { ChangeDetectorRef, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../../models/user.model';
import { API } from 'src/environments';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { TokenStorageService } from '../token.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';

export const JWT_NAME = 'user-token';


export interface LoginForm {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router,
    private tokenStorage: TokenStorageService) { }

  login(loginForm: LoginForm) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(API + '/users/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map((data) => {
        // localStorage.setItem(JWT_NAME, token.access_token);
        console.log("Login!");

      })
    )
  }

  loginToken(loginForm: LoginForm) {
    return this.http.post<any>(API + '/users/login', {email: loginForm.email, password: loginForm.password})
  }
  logout() {
    localStorage.removeItem(JWT_NAME);
  }

  isAuthenticated(){
  }

  getUser(){
    return this.http.get(API+'/users/getUser');
  }

  getAccessToken(): Observable<string> {
    const accessToken = localStorage.getItem('user-token');
    const refreshToken = this.tokenStorage.getRefreshToken();
    if (!this.jwtHelper.isTokenExpired(accessToken)) {
      return new BehaviorSubject(accessToken);
    } else if (!this.jwtHelper.isTokenExpired(refreshToken)) {
      console.log('refreshing access token');
      const opts = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + refreshToken
        })
      };
      return this.http.post<any>(API + '/users/refresh', {accessToken: refreshToken}).pipe(
        map((token) => {
          localStorage.removeItem(JWT_NAME);
          localStorage.setItem(JWT_NAME, token.access_token);
          
          return token;
        } )
      )
    } else {
      return throwError('refresh token is expired');
    }
  }

  refresh(token: string) {
    return this.http.post<any>(API + '/users/refresh', {accessToken: token}).pipe(
      map((token) => {
        localStorage.removeItem(JWT_NAME);
        localStorage.setItem(JWT_NAME, token.access_token);
        
        return token;
      } )
    )
  }

}
