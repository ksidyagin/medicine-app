import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInteractionFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: DrugInteractionFooterComponent;
  let fixture: ComponentFixture<DrugInteractionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugInteractionFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInteractionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
