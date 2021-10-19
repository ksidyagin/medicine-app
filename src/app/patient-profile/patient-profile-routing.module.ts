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

const routes: Routes = [
    { path: '', component: PatientProfileComponent, children: [
      {path: 'spa-card', component: SpaCardComponent,canActivate: [AuthGuard]},
      {path: 'interrogation', component: InterrogationComponent,canActivate: [AuthGuard]},
      {path: 'my-links', component: MyLinksComponent,canActivate: [AuthGuard]},
      {path: 'drug', component: DrugComponent,canActivate: [AuthGuard]},
      {path: 'my-notes', component: MyNotesComponent,canActivate: [AuthGuard]},
      {path: 'my-recipes', component: MyRecipesComponent,canActivate: [AuthGuard]},
        { path: 'online-appointment-patient', component: OnlineAppointmentComponent,canActivate: [AuthGuard], children: [
            { path: 'online-step-one', component: OnlineStepOneComponent,canActivate: [AuthGuard]},
            { path: 'online-step-two', component: OnlineStepTwoComponent,canActivate: [AuthGuard]},
            { path: 'online-step-tree', component: OnlineStepTreeComponent,canActivate: [AuthGuard]},
            { path: 'online-step-result', component: OnlineStepResultComponent,canActivate: [AuthGuard]},
            { path: 'specialized', component: SpecializedComponent,canActivate: [AuthGuard]},
          ]},
      {path: 'reference', component: ReferenceComponent,canActivate: [AuthGuard]},
      {path: 'services', component: ServicesComponent,canActivate: [AuthGuard]},
      {path: 'account', component: AccountComponent,canActivate: [AuthGuard]},
      { path: 'personal-information', component: PersonalInformationComponent,canActivate: [AuthGuard]},
      {path: 'my-appoitment', component: MyAppoitmentComponent,canActivate: [AuthGuard]},
      {path: 'appoitment', component: AppointmentComponent,canActivate: [AuthGuard]},
      {path: 'archive', component: ArchiveComponent,canActivate: [AuthGuard]},
      {path: 'appointment-doctor', component: AppointmentDoctorComponent,canActivate: [AuthGuard]},
      {path: 'questiong-view', component: QuestioningViewComponent,canActivate: [AuthGuard]},
      {path: 'view-record', component: ViewRecordComponent,canActivate: [AuthGuard]},
      {path: 'view-recipe', component: ViewRecipeComponent,canActivate: [AuthGuard]},
      {path: 'notifications', component: NotificationsComponent,canActivate: [AuthGuard]},
      {path: 'notifications-one', component: NotificationsOneComponent,canActivate: [AuthGuard]},
      {path: 'notifications-two', component: NotificationsTwoComponent,canActivate: [AuthGuard]},
    ]} ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PatientProfileRoutingModule { }
