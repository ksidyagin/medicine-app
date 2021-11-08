import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA }   from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { SystemModule } from './system/system.module';
import { AuthModule } from '../app/auth/auth.module';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppService } from './app.service';
import { DrugInteractionModule } from './drug-interaction/drug-interaction.module';
import { ActiveTypeService } from './drug-interaction/drug-store/activeservice';
import { EditionTypeService } from './drug-interaction/drug-store/editionservice';
import { GenericTypeService } from './drug-interaction/drug-store/genericservice';
import { GroupTypeService } from './drug-interaction/drug-store/groupservice';
import { GenderTypeService } from './drug-interaction/main/genderservice';
import { NurseProfileModule } from './nurse-profile/nurse-profile.module';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientProfileModule } from './patient-profile/patient-profile.module';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {OrderListModule} from 'primeng/orderlist';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {DataViewModule} from 'primeng/dataview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AuthenticationService } from './shared/services/authentification/authentification.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localeRu, 'ru');
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    InputTextareaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    NurseProfileModule,
    PatientProfileModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    OrderListModule,
    DropdownModule,
    AccordionModule,
    DataViewModule,
    SelectButtonModule,
    AutoCompleteModule
  ],
  providers: [TranslateService, TranslateStore,
    AppService,
    ActiveTypeService,
    GenderTypeService,
    GroupTypeService,
    EditionTypeService,
    GenericTypeService,
    AuthenticationService,
     JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true
    // },
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  exports:[
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    OrderListModule,
    DropdownModule,
    AccordionModule,
    DataViewModule,
    SelectButtonModule,
    AutoCompleteModule
  ],
  declarations: [ AppComponent, PatientProfileComponent],
  bootstrap:    [ AppComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }
