import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlergicTypeService {
  constructor(private http: HttpClient) {}

  getAlergics() {
    return this.http
      .get<any>('../../../assets/drug-interaction/alergic.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
