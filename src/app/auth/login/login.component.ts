import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { createReducer, on, Store } from '@ngrx/store';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/app.state';
import { Person } from 'src/app/reducers/user-token.model';
import { AuthenticationService, LoginForm } from 'src/app/shared/services/authentification/authentification.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from '../../system/services/models/user.model';
let tokenPayload: any;
import * as PersonActions from '../../reducers/actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  person: Person;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthenticationService,
    private router: Router, private store: Store<AppState>
  ) {
    this.person = new Person('', 0, '', '', '');
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


  onSubmit() {
    if(this.registerForm.invalid){
      return;
    }

    let email_form = this.registerForm.get('email').value;
    let password_form = this.registerForm.get('password').value;
    let loginForm: LoginForm = {email: email_form, password: password_form}
    this.authService.login(loginForm).subscribe((token: any) => {
      tokenPayload = jwtDecode(token.access_token);
      

      console.log(tokenPayload);
        if(tokenPayload.user.patient){
          let p: Person = new Person(tokenPayload.user.user.id, tokenPayload.user.user.email, tokenPayload.user.patient.first_name, tokenPayload.user.patient.last_name, tokenPayload.user.patient.patronymic)
          this.addPerson(p);
          this.router.navigate(['account']);
        }
        else if (tokenPayload.user.nurse){
          this.router.navigate(['nurse-account']);
        }
    });
  }

  goToRegistr() {
    this.router.navigate(['', 'reg-code']);
  }
 
  // 3. dispatch the AddPerson Action
  addPerson(person: Person) {
    this.store.dispatch(
       new PersonActions.AddPerson(person)
    );
  }
  clearPerson() {
    this.person = new Person('', 0, '', '', '');
  }
}
 
