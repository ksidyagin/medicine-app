import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
