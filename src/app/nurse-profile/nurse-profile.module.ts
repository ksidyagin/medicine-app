import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NurseProfileComponent } from './nurse-profile.component';
import { NurseProfileRoutingModule } from './nurse-profile.routing.module';
import { DrugInteractionHeaderComponent } from './shared/components/header/header.component';
import { DrugInteractionFooterComponent } from './shared/components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonBaseComponent } from './common-base/common-base.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { PendingReviewComponent } from './pending-review/pending-review.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [NurseProfileComponent,
    DrugInteractionHeaderComponent,
    DrugInteractionFooterComponent,
    CommonBaseComponent, DeclarationComponent,
    NotificationsComponent,
    QuestionnairesComponent,
    PendingReviewComponent

  ],
  imports: [
    CommonModule,
    NurseProfileRoutingModule,
    BrowserModule,
    ButtonModule,
    InputTextModule
  ]
})
export class NurseProfileModule { }
