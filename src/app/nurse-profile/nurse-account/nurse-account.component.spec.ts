import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAccountComponent } from './nurse-account.component';

describe('NurseAccountComponent', () => {
  let component: NurseAccountComponent;
  let fixture: ComponentFixture<NurseAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
