import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<any>  {  
    return this.http.get(API +'/get_doctor/' + id);

  }

  find() {
    return this.http.get<any[]>(API + '/get_doctors')
  }
}
