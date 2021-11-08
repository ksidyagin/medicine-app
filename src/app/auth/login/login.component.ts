import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthenticationService, LoginForm } from 'src/app/shared/services/authentification/authentification.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { API } from 'src/environments';
let tokenPayload: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  isSpinner = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthenticationService,
    private router: Router, private http: HttpClient
  ) {
    
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }


  async onSubmit() {
    if(this.registerForm.invalid){
      console.log("invalid form");
      return;
    }

    let email_form = this.registerForm.get('email').value;
    let password_form = this.registerForm.get('password').value;
    let loginForm: LoginForm = {email: email_form, password: password_form}
    this.authService.login(loginForm).subscribe((token: any) => {
      console.log("logging...");
      this.isSpinner = true;
        
        this.http.get(API + '/users/getUser').subscribe((data:any)=>{
          const tokenPayload: any = jwtDecode(data.token);
          if(tokenPayload.user.patient){
            console.log('logged0');
            this.router.navigate(['account']);
          }
          if(tokenPayload.user.nurse){
            console.log('logged1');
            this.router.navigate(['nurse-account']);
          }
        });
        

    });
    
    
  }

  goToRegistr() {
    this.router.navigate(['', 'reg-code']);
  }

 
}
 
