import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaCardComponent } from './spa-card.component';

describe('SpaCardComponent', () => {
  let component: SpaCardComponent;
  let fixture: ComponentFixture<SpaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
