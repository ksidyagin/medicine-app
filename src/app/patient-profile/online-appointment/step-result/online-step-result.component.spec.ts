import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStepResultComponent } from './online-step-result.component';

describe('StepResultComponent', () => {
  let component: OnlineStepResultComponent;
  let fixture: ComponentFixture<OnlineStepResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStepResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStepResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
