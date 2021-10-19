import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GenericTypeService {
  constructor(private http: HttpClient) {}

  getGenerics() {
    return this.http
      .get<any>('../../../assets/drug-interaction/generic.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
