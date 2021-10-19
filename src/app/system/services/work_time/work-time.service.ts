import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService {

  constructor(private http: HttpClient) { }

   findOne(work_schedule_id: number)  {
   return this.http.get<any>(API + '/get_work_times/' + work_schedule_id);
  }
}
