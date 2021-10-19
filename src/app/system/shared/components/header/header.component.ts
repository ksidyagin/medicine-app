import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clinics: any[];
  selectedClinicCode;
  constructor() { }

  ngOnInit(): void {
    this.clinics = [
      {name: 'Поликлиника №4', code: 'П№4'},
      {name: 'Поликлиника №7', code: 'П№7'}
  ];
  }

}


