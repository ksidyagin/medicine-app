import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioningViewComponent } from './questioning-view.component';

describe('QuestioningViewComponent', () => {
  let component: QuestioningViewComponent;
  let fixture: ComponentFixture<QuestioningViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestioningViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioningViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
