import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InstitutionNameService {
  constructor(private http: HttpClient) {}

  getInstitutionNames() {
    return this.http
      .get<any>('../../../assets/institutionname.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
