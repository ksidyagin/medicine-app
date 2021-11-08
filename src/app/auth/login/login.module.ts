import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressSpinnerModule

    ],
  declarations: [
   LoginComponent
  ],
  providers:[]
})

export class LoginModule { }
