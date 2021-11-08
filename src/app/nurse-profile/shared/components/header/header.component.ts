import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthenticationService } from 'src/app/shared/services/authentification/authentification.service';

@Component({
  selector: 'nurse-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class DrugInteractionHeaderComponent implements OnInit {
  user: any;
  firstname: any
  patronymic
  nurse: any;
  constructor(private changeDetection: ChangeDetectorRef, private auth: AuthenticationService) { 
     
   }

  ngOnInit(): void {
    this.auth.getUser().subscribe((data:any)=>{
      this.user = jwtDecode(data.token)
      this.firstname = this.user.user.nurse.first_name.substr(0, 1);
      this.patronymic = this.user.user.nurse.patronymic.substr(0, 1);
      this.changeDetection.detectChanges();
    })
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