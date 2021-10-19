import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notifications-one',
  templateUrl: './notifications-one.component.html',
  styleUrls: ['./notifications-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
