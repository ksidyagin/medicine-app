import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {

  diagnos_notification1 = localStorage.getItem('first-diagnos');
  // diagnos_notification2 = localStorage.getItem('second-diagnos');

  constructor() { }

  ngOnInit(): void {
  }

}
