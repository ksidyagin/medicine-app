import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientProfileComponent implements OnInit {

  activeRoutId: string;

  constructor(private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

   id: number;
  ngOnInit(): void {
    this.activeRoutId = 'patient';
  }

  goToClinic(route: string, id: number){


    this.router.navigate(['', route]);
  }


}
