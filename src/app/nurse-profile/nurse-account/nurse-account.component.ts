import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-nurse-account',
  templateUrl: './nurse-account.component.html',
  styleUrls: ['./nurse-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NurseAccountComponent implements OnInit {

  nurse: any =  jwtDecode(localStorage.getItem('user-token'));
  constructor() { }

  ngOnInit(): void {
  }

}
