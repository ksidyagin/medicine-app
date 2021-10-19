import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-questioning-view',
  templateUrl: './questioning-view.component.html',
  styleUrls: ['./questioning-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestioningViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
