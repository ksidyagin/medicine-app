import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
