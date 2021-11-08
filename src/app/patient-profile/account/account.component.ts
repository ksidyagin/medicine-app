import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentification/authentification.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  patient: any;
    constructor(private changeDetection: ChangeDetectorRef, private auth: AuthenticationService) { 
       
     }

  ngOnInit(): void {

      this.auth.getUser().subscribe((data:any)=>{
        this.patient = jwtDecode(data.token)
        this.changeDetection.detectChanges();
      })

  }


}
