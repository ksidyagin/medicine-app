import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {PatientProfileComponent} from './patient-profile.component';
import {PatientProfileRoutingModule} from './patient-profile-routing.module';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



import { PatientComponent } from './patient/patient.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { ObservationComponent } from './observation/observation.component';
import { PatientDatabaseComponent } from './patient-database/patient-database.component';
import { WriteRecipeComponent } from './write-recipe/write-recipe.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PatientProfileRoutingModule,
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
    RouterModule
  ],
  declarations: [
    PatientProfileComponent,
    PatientComponent,
    QuestionnairesComponent,
    ObservationComponent,
    WriteRecipeComponent,
    PatientDatabaseComponent
  ]
})

export class PatientProfileModule { }
