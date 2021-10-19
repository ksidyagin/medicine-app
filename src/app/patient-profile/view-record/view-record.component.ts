import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
