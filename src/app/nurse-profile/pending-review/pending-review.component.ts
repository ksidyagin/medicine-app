import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pending-review',
  templateUrl: './pending-review.component.html',
  styleUrls: ['./pending-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
