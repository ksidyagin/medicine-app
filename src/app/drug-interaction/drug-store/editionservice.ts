import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditionTypeService {
  constructor(private http: HttpClient) {}

  getEditions() {
    return this.http
      .get<any>('../../../assets/farmnames.json')
      .toPromise()
      .then(res => <any[]>res.items)
      .then(data => {
        return data;
      });
  }
}
