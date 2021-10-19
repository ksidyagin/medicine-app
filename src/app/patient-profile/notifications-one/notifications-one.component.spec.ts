import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsOneComponent } from './notifications-one.component';

describe('NotificationsOneComponent', () => {
  let component: NotificationsOneComponent;
  let fixture: ComponentFixture<NotificationsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
