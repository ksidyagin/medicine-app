import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GenderTypeService {
  constructor(private http: HttpClient) {}

  getGenders() {
    return this.http
      .get<any>('../../../assets/drug-interaction/gender.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
