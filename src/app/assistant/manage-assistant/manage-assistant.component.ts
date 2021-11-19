import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AssistantService } from './services/assistant.service';
import { MyUUIDService } from './services/my-uuid.service';
import { NewAssistantRequest } from './models/newAssistantRequest';

@Component({
  selector: 'app-manage-assistant',
  templateUrl: './manage-assistant.component.html',
  styleUrls: ['./manage-assistant.component.scss']
})
export class ManageAssistantComponent implements OnInit {

  public assistantForm;
  public operationResult: any;

  private readonly operationResultObserver: any = {
    next: (x: any) => this.operationResult = x,
    error: (err:Error) => console.log("Get an error: " + err),
    complete: () => this.validateResponse()
  }

  constructor(
    private assistantService:AssistantService,
    private myUUIDService:MyUUIDService, 
    private formBuilder:FormBuilder)
  {
    this.assistantForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  ngOnInit(): void {
  }

  save(){
    var assistant = new NewAssistantRequest(
      this.assistantForm.get("firstName").value,
      this.assistantForm.get("lastName").value,
      this.assistantForm.get("email").value,
      this.myUUIDService.generateUUID(7)
    );

    this.assistantService.saveAssistant(assistant).subscribe(this.operationResultObserver);

    this.assistantForm.reset();
  }

  validateResponse(){
    if(this.operationResult != null && this.operationResult != undefined && this.operationResult.length != 0){
      alert("success");
    }else{
      alert("Something was wrong saving assistant");
    }
  }

}
