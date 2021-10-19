import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInteractionMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: DrugInteractionMainComponent;
  let fixture: ComponentFixture<DrugInteractionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugInteractionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInteractionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
