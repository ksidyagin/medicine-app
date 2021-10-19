import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';

// @ts-ignore
@Component({
  selector: 'patient-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})

export class HeadComponent {
  user: any = jwtDecode(localStorage.getItem('user-token'));
  name = this.user.user.patient.first_name.substr(0, 1);
  patronymic = this.user.user.patient.patronymic.substr(0, 1);
  constructor() {
  }
}


