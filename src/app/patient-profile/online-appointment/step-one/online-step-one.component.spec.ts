import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStepOneComponent } from './online-step-one.component';

describe('StepOneComponent', () => {
  let component: OnlineStepOneComponent;
  let fixture: ComponentFixture<OnlineStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
