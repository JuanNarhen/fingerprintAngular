import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssistantComponent } from './manage-assistant.component';

describe('ManageAssistantComponent', () => {
  let component: ManageAssistantComponent;
  let fixture: ComponentFixture<ManageAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
