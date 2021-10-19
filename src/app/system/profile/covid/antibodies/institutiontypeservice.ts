import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InstitutionTypeService {
  constructor(private http: HttpClient) {}

  getInstitutionTypes() {
    return this.http
      .get<any>('../../../assets/institutiontype.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
