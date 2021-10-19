import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInteractionHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: DrugInteractionHeaderComponent;
  let fixture: ComponentFixture<DrugInteractionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugInteractionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInteractionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
