import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { API } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  get_covid(){
    const rezalt = this.http.get(API + '/get_covid');
    return rezalt;
  }

  get_news(){
    const rezalt = this.http.get(API + '/get_news');
    return rezalt;
  }
}
