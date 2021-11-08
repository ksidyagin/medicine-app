import { ChangeDetectorRef, Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthenticationService } from 'src/app/shared/services/authentification/authentification.service';

// @ts-ignore
@Component({
  selector: 'patient-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})

export class HeadComponent {
  patient:any;
  firstname;
  patronymic;
  constructor(private auth: AuthenticationService, private changeDetection: ChangeDetectorRef) {
    this.auth.getUser().subscribe((data:any)=>{
      this.patient = jwtDecode(data.token);
      this.firstname = this.patient.user.patient.first_name.substr(0, 1);
      this.patronymic = this.patient.user.patient.patronymic.substr(0, 1);
      this.changeDetection.detectChanges();
    })
  }
}


