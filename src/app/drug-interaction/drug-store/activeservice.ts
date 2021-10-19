import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ActiveTypeService {
  constructor(private http: HttpClient) {}

  getActives() {
    return this.http
      .get<any>('../../../assets/activnames.json')
      .toPromise()
      .then(res => <any[]>res.items)
      .then(data => {
        return data;
      });
  }
}
