import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RegisterCodeComponent } from './register-code/register-code.component';
import { RegisterPhoneComponent } from './register-phone/register-phone.component';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import { NgxDadataModule } from '@kolkov/ngx-dadata';
import { InputMaskModule } from "primeng/inputmask";
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    NgxDadataModule,
    InputMaskModule,
    ButtonModule,
    ToastModule,
    RippleModule
  ],

  declarations: [
    RegisterCodeComponent,
    RegisterComponent,
    RegisterPhoneComponent
  ],
  providers: []
})
export class RegisterModule { }
