import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if(!this.auth.isAuthenticated()) {
     let choise = confirm('Нужно войти в систему, чтобы продолжить!');
      if(choise)
      {
        this.router.navigate(['login']);

      }
      else {
        this.router.navigate(['reg-code']);
      }
      return false;
    }
    return true;
  }
  
}
