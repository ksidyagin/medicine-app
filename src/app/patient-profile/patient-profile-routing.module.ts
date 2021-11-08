import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientProfileComponent } from "./patient-profile.component";
import { SpaCardComponent } from "./spa-card/spa-card.component";
import { InterrogationComponent } from './interrogation/interrogation.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ReferenceComponent } from './reference/reference.component';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './account/account.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import {DrugComponent} from "./drug/drug.component";
import { MyAppoitmentComponent } from "./my-appoitment/my-appoitment.component";
import { AppointmentComponent } from "../system/recording/appointment/appointment.component";
import { ArchiveComponent } from "./archive/archive.component";
import { QuestioningViewComponent } from "./questioning-view/questioning-view.component";
import { ViewRecordComponent } from "./view-record/view-record.component";
import { ViewRecipeComponent } from "./view-recipe/view-recipe.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {NotificationsOneComponent} from "./notifications-one/notifications-one.component";
import {NotificationsTwoComponent} from "./notifications-two/notifications-two.component";
import {OnlineStepOneComponent} from "./online-appointment/step-one/online-step-one.component";
import {OnlineStepTwoComponent} from "./online-appointment/step-two/online-step-two.component";
import {OnlineStepTreeComponent} from "./online-appointment/step-tree/online-step-tree.component";
import {OnlineStepResultComponent} from "./online-appointment/step-result/online-step-result.component";
import {SpecializedComponent} from "./online-appointment/specialized/specialized.component";
import {AppointmentDoctorComponent} from "./appointment-doctor/appointment-doctor.component";
import { OnlineAppointmentComponent } from "./online-appointment/online-appointment.component";
import { AuthGuard } from "../shared/guards/auth.guard";
import { MessengerComponent } from "./messenger/messenger.component";
import { MessengerDialogComponent } from "./messenger-dialog/messenger-dialog.component";

const routes: Routes = [
    { path: '', component: PatientProfileComponent, children: [
      {path: 'spa-card', component: SpaCardComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'interrogation', component: InterrogationComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'my-links', component: MyLinksComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'drug', component: DrugComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'my-notes', component: MyNotesComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'my-recipes', component: MyRecipesComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
        { path: 'online-appointment-patient', component: OnlineAppointmentComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}, children: [
            { path: 'online-step-one', component: OnlineStepOneComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
            { path: 'online-step-two', component: OnlineStepTwoComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
            { path: 'online-step-tree', component: OnlineStepTreeComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
            { path: 'online-step-result', component: OnlineStepResultComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
            { path: 'specialized', component: SpecializedComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
          ]},
      {path: 'reference', component: ReferenceComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'services', component: ServicesComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'account', component: AccountComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      { path: 'personal-information', component: PersonalInformationComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'my-appoitment', component: MyAppoitmentComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'appoitment', component: AppointmentComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'archive', component: ArchiveComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'appointment-doctor', component: AppointmentDoctorComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'questiong-view', component: QuestioningViewComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'view-record', component: ViewRecordComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'view-recipe', component: ViewRecipeComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'notifications', component: NotificationsComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'notifications-one', component: NotificationsOneComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      {path: 'notifications-two', component: NotificationsTwoComponent,canActivate: [AuthGuard], data: {expectedRole: 'patient'}},
      { path: 'messenger', component: MessengerComponent, canActivate: [AuthGuard], data: {expectedRole: 'patient'} },
      { path: 'messenger-dialog', component: MessengerDialogComponent, canActivate: [AuthGuard], data: {expectedRole: 'patient'} },
    ]} ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PatientProfileRoutingModule { }
