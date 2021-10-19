import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MedicalCardComponent} from './medical-card.component';
import { MyMapComponent } from './my-map/my-map.component';
import {MedicalCardRoutingModule} from './medical-card-routing.module';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MyAnalyzesComponent } from './my-analyzes/my-analyzes.component';
import { MyResearchComponent } from './my-research/my-research.component';
import { MyDischargeComponent } from './my-discharge/my-discharge.component';
import { MyVaccinationComponent } from './my-vaccination/my-vaccination.component';
import { MyReferenceComponent } from './my-reference/my-reference.component';
import { MyHospitalsComponent } from './my-hospitals/my-hospitals.component';

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


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MedicalCardRoutingModule,
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
    BrowserAnimationsModule
  ],
  declarations: [
   MedicalCardComponent,
   MyMapComponent,
   MyRecipesComponent,
   MyAnalyzesComponent,
   MyResearchComponent,
   MyDischargeComponent,
   MyVaccinationComponent,
   MyReferenceComponent,
   MyHospitalsComponent
  ]
})

export class MedicalCardModule { }
