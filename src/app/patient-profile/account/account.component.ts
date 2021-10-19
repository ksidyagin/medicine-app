import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/app.state';
import { LoginUser, Person } from 'src/app/reducers/user-token.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  patient: any =  jwtDecode(localStorage.getItem('user-token'));
  persons: Observable<Person[]>;
    constructor(private store: Store<AppState>) { 
          this.persons = store.select('persons');
     }

  ngOnInit(): void {
    console.log(this.persons)
  }

}
