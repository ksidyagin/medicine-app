import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-register-code',
  templateUrl: './register-code.component.html',
  styleUrls: ['./register-code.component.scss']
})
export class RegisterCodeComponent implements OnInit {

  emailForm: FormGroup;
  codeForm: FormGroup;
  firstFormIsComplete: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.firstFormIsComplete = false;

    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.codeForm = new FormGroup({
      password_code: new FormControl(null, [Validators.required])
    });

  }

  onSubmitEmail(){
    if (this.emailForm.invalid) {
      return;
    }
    this.userService.registration(this.emailForm.get('email').value).subscribe(()=>{
      this.firstFormIsComplete = true;
    });
  }
  onSubmitCode(){
    if (this.codeForm.invalid) {
      return;
    }
    this.userService.verifyCode(this.codeForm.get('password_code').value).subscribe((data)=>{
      if(data === true){
        this.router.navigate(['','register']);
      }
      else{
        return;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['', 'login']);
  }

}
