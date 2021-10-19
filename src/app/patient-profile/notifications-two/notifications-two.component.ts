import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notifications-two',
  templateUrl: './notifications-two.component.html',
  styleUrls: ['./notifications-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsTwoComponent implements OnInit {
  diagnos_notification1 = localStorage.getItem('first-diagnos');
  constructor() { }

  ngOnInit(): void {
  }

}
