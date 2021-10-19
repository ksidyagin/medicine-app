import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressTestComponent } from './express-test.component';

describe('ExpressTestComponent', () => {
  let component: ExpressTestComponent;
  let fixture: ComponentFixture<ExpressTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
