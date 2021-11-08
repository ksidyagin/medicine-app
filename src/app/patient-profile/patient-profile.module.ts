import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterrogationComponent } from './interrogation/interrogation.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ReferenceComponent } from './reference/reference.component';
import { ServicesComponent } from './services/services.component';
import { SpaCardComponent } from './spa-card/spa-card.component';
import { PatientProfileRoutingModule } from './patient-profile-routing.module';
import { AccountComponent } from './account/account.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import {HeadComponent} from "./shared/components/head/head.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {DrugComponent} from "./drug/drug.component";
import { QuestioningViewComponent } from './questioning-view/questioning-view.component';
import { ArchiveComponent } from './archive/archive.component';
import { MyAppoitmentComponent } from './my-appoitment/my-appoitment.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import {NotificationsComponent} from "./notifications/notifications.component";
import {NotificationsTwoComponent} from "./notifications-two/notifications-two.component";
import {NotificationsOneComponent} from "./notifications-one/notifications-one.component";
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {OrderListModule} from 'primeng/orderlist';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { OnlineAppointmentModule} from "./online-appointment/online-appointment.module";
import {AppointmentDoctorComponent} from "./appointment-doctor/appointment-doctor.component";
import { MessengerComponent } from './messenger/messenger.component';
import { MessengerDialogComponent } from './messenger-dialog/messenger-dialog.component';


@NgModule({
  declarations: [
    InterrogationComponent,
    MyLinksComponent,
    MyNotesComponent,
    MyRecipesComponent,
    ReferenceComponent,
    ServicesComponent,
    SpaCardComponent,
    AccountComponent,
    PersonalInformationComponent,
    HeadComponent,
    FooterComponent,
    DrugComponent,
    QuestioningViewComponent,
    ArchiveComponent,
    MyAppoitmentComponent,
    ViewRecipeComponent,
    NotificationsComponent,
    NotificationsTwoComponent,
    NotificationsOneComponent,
    AppointmentDoctorComponent,
    MessengerComponent,
    MessengerDialogComponent
  ],
  exports: [
    HeadComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PatientProfileRoutingModule,
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
    OnlineAppointmentModule,

  ],
  providers:[]
})
export class PatientProfileModule { }
