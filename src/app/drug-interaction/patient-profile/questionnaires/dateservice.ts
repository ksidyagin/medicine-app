import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DateTypeService {
  constructor(private http: HttpClient) {}

  getDates() {
    return this.http
      .get<any>('../../../assets/drug-interaction/data.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
