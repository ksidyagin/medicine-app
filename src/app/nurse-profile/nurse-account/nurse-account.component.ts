import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthenticationService } from 'src/app/shared/services/authentification/authentification.service';

@Component({
  selector: 'app-nurse-account',
  templateUrl: './nurse-account.component.html',
  styleUrls: ['./nurse-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NurseAccountComponent implements OnInit {

  nurse: any;
    constructor(private changeDetection: ChangeDetectorRef, private auth: AuthenticationService) { 
       
     }

  ngOnInit(): void {
    this.auth.getUser().subscribe((data:any)=>{
      this.nurse = jwtDecode(data.token)
      this.changeDetection.detectChanges();
    })
  }

}
