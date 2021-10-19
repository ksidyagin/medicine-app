import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";
@Component({
  selector: 'app-online-appointment',
  templateUrl: './online-appointment-patient.component.html',
  styleUrls: ['./online-appointment-patient.component.scss']
})
export class OnlineAppointmentComponent implements OnInit {

  // buttons
  visitOptions: any[];

  value1: string = "first";

  queOptions: any[];

  // Неотложная - urgent
  // Плановая - planned

  value2: string = "urgent";

  constructor(private primeNGConfig: PrimeNGConfig) {
    this.visitOptions = [
      { label: "Первичный", value: "first" },
      { label: "Вторичный", value: "second" }
    ];

    this.queOptions = [
      { label: "Неотложная", value: "urgent" },
      { label: "Плановая", value: "planned" }
    ];
  }

  ngOnInit(): void {
    // buttons
    this.primeNGConfig.ripple = true;
  }

}
