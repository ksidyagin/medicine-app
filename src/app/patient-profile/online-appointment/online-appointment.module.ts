import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {OnlineAppointmentRoutingModule} from "./online-appointment-routing.module";
import {OnlineStepOneComponent} from "./step-one/online-step-one.component";
import {OnlineStepTwoComponent} from "./step-two/online-step-two.component";
import {OnlineStepTreeComponent} from "./step-tree/online-step-tree.component";
import {OnlineStepResultComponent} from "./step-result/online-step-result.component";
import {CalendarModule} from "primeng/calendar";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {SliderModule} from "primeng/slider";
import {InputTextModule} from "primeng/inputtext";
import {ChartModule} from "primeng/chart";
import {OrderListModule} from "primeng/orderlist";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {AccordionModule} from "primeng/accordion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import { SpecializedComponent } from './specialized/specialized.component';
import { GastritisComponent } from './gastritis/gastritis.component';
import { OnlineAppointmentComponent } from './online-appointment.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    OnlineAppointmentRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    ChartModule,
    OrderListModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,

  ],
  declarations: [
    OnlineStepOneComponent,
    OnlineStepTwoComponent,
    OnlineStepTreeComponent,
    OnlineStepResultComponent,
    SpecializedComponent,
    GastritisComponent,
    OnlineAppointmentComponent
  ]
})

export class OnlineAppointmentModule { }
