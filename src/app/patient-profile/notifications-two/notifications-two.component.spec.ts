import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsTwoComponent } from './notifications-two.component';

describe('NotificationsTwoComponent', () => {
  let component: NotificationsTwoComponent;
  let fixture: ComponentFixture<NotificationsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
