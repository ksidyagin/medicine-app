import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentification/authentification.service';
import decode from 'jwt-decode';
import { User } from '../models/user.model';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    if(!this.auth.isAuthenticated()) {
      alert('Нужно войти в систему, чтобы продолжить!');
      return false;
    }
    // this will be passed from the route config
    // on the data property
    const expectedRole: string = route.data.expectedRole;
    const token = localStorage.getItem('blog-token');
    // decode the token to get its payload
    const tokenPayload: any = jwtDecode(token);
    if (
      expectedRole.search(" "+ tokenPayload.user.role + " ") == -1
    ) {
      alert(`Для входа в данный раздел нужны соответствующие права!`);
      return false;
    }
    return true;
  }
  
}
