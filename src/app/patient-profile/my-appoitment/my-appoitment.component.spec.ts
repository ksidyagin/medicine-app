import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppoitmentComponent } from './my-appoitment.component';

describe('MyAppoitmentComponent', () => {
  let component: MyAppoitmentComponent;
  let fixture: ComponentFixture<MyAppoitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppoitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppoitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
