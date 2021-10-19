import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-express-test',
  templateUrl: './express-test.component.html',
  styleUrls: ['./express-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpressTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
