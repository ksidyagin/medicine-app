import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ObservationComponent } from './observation/observation.component';
import { PatientDatabaseComponent } from './patient-database/patient-database.component';
import {PatientProfileComponent} from './patient-profile.component';
import { PatientComponent } from './patient/patient.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { WriteRecipeComponent } from './write-recipe/write-recipe.component';



const routes: Routes = [
  { path: 'patient-profile', component: PatientProfileComponent, children: [
    {path: 'patient', component: PatientComponent},
    {path: 'questionnaires', component: QuestionnairesComponent},
    {path: 'observation', component: ObservationComponent},
    {path: 'patient-database', component: PatientDatabaseComponent},
    {path: 'write-recipe', component: WriteRecipeComponent},
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientProfileRoutingModule { }
