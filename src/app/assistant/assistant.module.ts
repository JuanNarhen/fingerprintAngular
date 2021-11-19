import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantRoutingModule } from './assistant-routing.module';
import { ManageAssistantComponent } from './manage-assistant/manage-assistant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageAssistantComponent
  ],
  imports: [
    CommonModule,
    AssistantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssistantModule { }
