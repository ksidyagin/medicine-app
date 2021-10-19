import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FillTypeService {
  constructor(private http: HttpClient) {}

  getFills() {
    return this.http
      .get<any>('../../../assets/drug-interaction/fill.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
