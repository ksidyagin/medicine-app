import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnlineStepOneComponent} from "./step-one/online-step-one.component";
import {OnlineStepTwoComponent} from "./step-two/online-step-two.component";
import {OnlineStepTreeComponent} from "./step-tree/online-step-tree.component";
import {OnlineStepResultComponent} from "./step-result/online-step-result.component";
import {SpecializedComponent} from "./specialized/specialized.component";
import { GastritisComponent } from './gastritis/gastritis.component';
import { OnlineAppointmentComponent } from './online-appointment.component';





const routes: Routes = [
  { path: 'online-appointment-patient', component: OnlineAppointmentComponent, children: [
      { path: 'online-step-one', component: OnlineStepOneComponent},
      { path: 'online-step-two', component: OnlineStepTwoComponent},
      { path: 'online-step-tree', component: OnlineStepTreeComponent},
      { path: 'online-step-result', component: OnlineStepResultComponent},
      { path: 'specialized', component: SpecializedComponent},
      { path: 'gastritis', component: GastritisComponent},
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OnlineAppointmentRoutingModule { }
