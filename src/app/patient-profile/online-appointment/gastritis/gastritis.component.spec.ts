import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastritisComponent } from './gastritis.component';

describe('GastritisComponent', () => {
  let component: GastritisComponent;
  let fixture: ComponentFixture<GastritisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastritisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
