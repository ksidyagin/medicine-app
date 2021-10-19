import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'nurse-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class DrugInteractionHeaderComponent implements OnInit {
  user: any = jwtDecode(localStorage.getItem('user-token'));
  name = this.user.user.nurse.first_name.substr(0, 1);
  patronymic = this.user.user.nurse.patronymic.substr(0, 1);
  constructor() { }

  ngOnInit(): void {
  }

}

interface Clinic {
  name: string,
  code: string
}

export class DropdownDemo {

  clinics: Clinic[];

  selectedClinicCode!: Clinic;

  constructor() {
      this.clinics = [
          {name: 'Поликлиника №4', code: 'П№4'},
          {name: 'Поликлиника №7', code: 'П№7'}
      ];
  }

}