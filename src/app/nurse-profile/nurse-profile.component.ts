import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nurse-profile',
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css'],
})
export class NurseProfileComponent implements OnInit {

  activeRoutId: string;

  constructor(private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

   id: number;
  ngOnInit(): void {
    this.activeRoutId = 'nurse';
  }

  goToClinic(route: string, id: number){

    
    this.router.navigate(['', route]);
  }

}
