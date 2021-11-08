import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { CommonBaseComponent } from "./common-base/common-base.component";
import { DeclarationComponent } from "./declaration/declaration.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { NurseAccountComponent } from "./nurse-account/nurse-account.component";
import { NurseProfileComponent } from "./nurse-profile.component";
import { PendingReviewComponent } from "./pending-review/pending-review.component";
import { QuestionnairesComponent } from "./questionnaires/questionnaires.component";

const routes: Routes = [
    { path: '', component: NurseProfileComponent, children: [
      {path: 'nurse-account', component: NurseAccountComponent},
      {path: 'nurse-common_base', component: CommonBaseComponent,canActivate: [AuthGuard], data: {expectedRole: 'nurse'}},
      {path: 'nurse-questionaries', component: QuestionnairesComponent,canActivate: [AuthGuard], data: {expectedRole: 'nurse'}},
      {path: 'nurse-pending_review', component: PendingReviewComponent,canActivate: [AuthGuard], data: {expectedRole: 'nurse'}},
      {path: 'nurse-declaration', component: DeclarationComponent,canActivate: [AuthGuard], data: {expectedRole: 'nurse'}},
      {path: 'nurse-notifications', component: NotificationsComponent,canActivate: [AuthGuard], data: {expectedRole: 'nurse'}}
 
    ]} ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class NurseProfileRoutingModule { }