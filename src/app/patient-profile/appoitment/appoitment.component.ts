import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-appoitment',
  templateUrl: './appoitment.component.html',
  styleUrls: ['./appoitment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppoitmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
