import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {OrderListModule} from 'primeng/orderlist';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { DrugInteractionMainComponent } from './main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CalendarModule,
    AutoCompleteModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    OrderListModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    FormsModule,
    SelectButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule
  ],

  declarations: [
    DrugInteractionMainComponent
  ],
  providers: []
})
export class MainModule { }
