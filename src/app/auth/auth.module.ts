import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    AuthRoutingModule,
    CalendarModule
  ]
})
export class AuthModule { }

