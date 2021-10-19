import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-appoitment',
  templateUrl: './my-appoitment.component.html',
  styleUrls: ['./my-appoitment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAppoitmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
