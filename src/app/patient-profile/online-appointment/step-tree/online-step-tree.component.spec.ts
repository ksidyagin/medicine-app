import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStepTreeComponent } from './online-step-tree.component';

describe('StepTreeComponent', () => {
  let component: OnlineStepTreeComponent;
  let fixture: ComponentFixture<OnlineStepTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStepTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStepTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
