import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
