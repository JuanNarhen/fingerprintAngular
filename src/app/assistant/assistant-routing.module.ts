import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAssistantComponent } from './manage-assistant/manage-assistant.component';

const routes: Routes = [{
  path:"",
  children:[
    {
      path:"save",
      component:ManageAssistantComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistantRoutingModule { }
