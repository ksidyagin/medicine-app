import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupTypeService {
  constructor(private http: HttpClient) {}

  getGroups() {
    return this.http
      .get<any>('../../../assets/clinnames.json')
      .toPromise()
      .then(res => <any[]>res.items)
      .then(data => {
        return data;
      });
  }
}
