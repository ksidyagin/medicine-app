import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStepTwoComponent } from './online-step-two.component';

describe('StepTwoComponent', () => {
  let component: OnlineStepTwoComponent;
  let fixture: ComponentFixture<OnlineStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
