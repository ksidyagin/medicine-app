import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { DrugInteractionComponent } from './drug-interaction.component';
import { DrugInteractionRoutingModule } from './drug-interaction.routing.module';
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
import {DataViewModule} from 'primeng/dataview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';


import localeRu from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { DrugInteractionHeaderComponent } from './shared/components/header/header.component';
import { DrugInteractionFooterComponent } from './shared/components/footer/footer.component';
import { MainModule } from './main/main.module';
import { DrugInteractionsComponent } from './drug-interactions/drug-interactions.component';
import { MedicalCardModule } from './medical-card/medical-card.module';
import { DrugStoreComponent } from './drug-store/drug-store.component';
import { RouterModule } from '@angular/router';
import { PatientProfileModule } from './patient-profile/patient-profile.module';
import { BrowserModule } from '@angular/platform-browser';
import { PatientDatabaseComponent } from './patient-profile/patient-database/patient-database.component';
registerLocaleData(localeRu, 'ru');

@NgModule({
  imports: [
    CommonModule,
    DrugInteractionRoutingModule,
    CalendarModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    OrderListModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    DialogModule,
    DataViewModule,
    SelectButtonModule,
    AutoCompleteModule,
    MainModule,
    MedicalCardModule,
    RouterModule,
    PatientProfileModule,
    BrowserModule,
    ProgressSpinnerModule,
    PatientProfileModule
  ],
  exports:[
    DialogModule,
    DataViewModule,
    AutoCompleteModule,
    SelectButtonModule,
    DropdownModule
  ],
  declarations: [
    DrugInteractionComponent,
    DrugInteractionHeaderComponent,
    DrugInteractionFooterComponent,
    DrugInteractionsComponent,
    DrugStoreComponent
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DrugInteractionModule { }
