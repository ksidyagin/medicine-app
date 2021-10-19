import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments';
import { ClinicType } from '../models/clinic_type.model';
import { Placement } from '../models/placement.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicTypeService {

  constructor(private http: HttpClient) { }

   findOne(id: number): Observable<any>  {  
    return this.http.get(API +'/get_clinic_types/' + id);

  }

  find() {
    return this.http.get<any[]>(API + '/get_clinic_types')
  }
}
