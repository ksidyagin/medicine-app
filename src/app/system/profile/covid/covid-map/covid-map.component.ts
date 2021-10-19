import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-covid-map',
  templateUrl: './covid-map.component.html',
  styleUrls: ['./covid-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CovidMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
