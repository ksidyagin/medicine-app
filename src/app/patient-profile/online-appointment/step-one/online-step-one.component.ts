import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-step-one',
  templateUrl: './online-step-one.component.html',
  styleUrls: ['./online-step-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineStepOneComponent implements OnInit {

  // buttons
  visitOptions: any[];

  value1: string = "first";



  constructor(private primeNGConfig: PrimeNGConfig) {


    this.visitOptions = [
      { label: "Первичный", value: "first" },
      { label: "Вторичный", value: "second" }
    ];

  }

  ngOnInit(): void {
    // buttons
    this.primeNGConfig.ripple = true;
  }

}
