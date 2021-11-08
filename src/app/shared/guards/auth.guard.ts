import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { API } from 'src/environments';
import { AuthenticationService } from '../services/authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  flag;
  constructor(private ngZone: NgZone, private auth: AuthenticationService, private router: Router, private http:HttpClient,
    ) {
      
    }
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.isOpened(route)
      .then(response => this.flag = response)
      
    }

    async isOpened(route: ActivatedRouteSnapshot): Promise<boolean>{
      let url = API + '/users/auth';
      let response = await fetch(url);
      let data = await response.json();
      if(!data.authenticated){
        this.router.navigate(['login']);
        return;
      }
      else{
        let response = await fetch(API + '/users/getUser');
        let data = await response.json();
        const token = data.token;
        const expectedRole: string = route.data.expectedRole;
        const tokenPayload: any = jwtDecode(token);
        if(tokenPayload.user.patient && expectedRole === 'patient'){
          return true;
        }
        else if(tokenPayload.user.nurse && expectedRole === 'nurse'){
          return true;
          
        }
        return false;
      }
    }


}
