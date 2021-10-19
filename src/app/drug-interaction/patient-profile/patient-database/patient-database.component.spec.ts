import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDatabaseComponent } from './patient-database.component';

describe('PatientDatabaseComponent', () => {
  let component: PatientDatabaseComponent;
  let fixture: ComponentFixture<PatientDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
