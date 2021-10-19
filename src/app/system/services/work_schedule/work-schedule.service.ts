import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments';
import { WorkSchedule } from '../models/work_schedule.model';

@Injectable({
  providedIn: 'root'
})
export class WorkScheduleService {

  constructor(private http: HttpClient) { }

   findOne(id: number)  {
   return this.http.get<any>(API + '/get_work_schedule/' + id);
    
  }
}
