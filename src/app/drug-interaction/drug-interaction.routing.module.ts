import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrugInteractionComponent } from './drug-interaction.component';
import {DrugInteractionMainComponent} from './main/main.component';
import { DrugInteractionsComponent } from './drug-interactions/drug-interactions.component';
import { MedicalCardComponent } from './medical-card/medical-card.component';
import { MyAnalyzesComponent } from './medical-card/my-analyzes/my-analyzes.component';
import { MyDischargeComponent } from './medical-card/my-discharge/my-discharge.component';
import { MyHospitalsComponent } from './medical-card/my-hospitals/my-hospitals.component';
import { MyMapComponent } from './medical-card/my-map/my-map.component';
import { MyRecipesComponent } from './medical-card/my-recipes/my-recipes.component';
import { MyReferenceComponent } from './medical-card/my-reference/my-reference.component';
import { MyResearchComponent } from './medical-card/my-research/my-research.component';
import { MyVaccinationComponent } from './medical-card/my-vaccination/my-vaccination.component';
import { DrugStoreComponent } from './drug-store/drug-store.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { ObservationComponent } from './patient-profile/observation/observation.component';
import { PatientComponent } from './patient-profile/patient/patient.component';
import { QuestionnairesComponent } from './patient-profile/questionnaires/questionnaires.component';
import {DoctorProfileComponent} from "./doctor-profile/doctor-profile.component";
import { PatientDatabaseComponent } from './patient-profile/patient-database/patient-database.component';
import { WriteRecipeComponent } from './patient-profile/write-recipe/write-recipe.component';


const routes: Routes = [
  { path: '', component: DrugInteractionComponent, children: [
    {path: 'drug-main', component: DrugInteractionMainComponent},
    {path: 'drug-interactions', component: DrugInteractionsComponent},
    {path: 'drug-store', component: DrugStoreComponent},
      {path: 'doctor-profile', component: DoctorProfileComponent},
    { path: 'patient-profile', component: PatientProfileComponent, children: [
      {path: 'patient', component: PatientComponent},
      {path: 'questionnaires', component: QuestionnairesComponent},
      {path: 'observation', component: ObservationComponent},
      {path: 'patient-database', component: PatientDatabaseComponent},
      {path: 'write-recipe', component: WriteRecipeComponent},

    ]},
    { path: 'medical-card', component: MedicalCardComponent, children: [
      {path: 'my-map', component: MyMapComponent},
      {path: 'my-recipes', component: MyRecipesComponent},
      {path: 'my-analyzes', component: MyAnalyzesComponent},
      {path: 'my-research', component: MyResearchComponent},
      {path: 'my-discharge', component: MyDischargeComponent},
      {path: 'my-vaccination', component: MyVaccinationComponent},
      {path: 'my-reference', component: MyReferenceComponent},
      {path: 'my-hospitals', component: MyHospitalsComponent},
    ]}
  ]} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DrugInteractionRoutingModule { }
