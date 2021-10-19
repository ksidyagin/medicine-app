import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DiagnosisTypeService {
  constructor(private http: HttpClient) {}

  getDiagnosises() {
    return this.http
      .get<any>('../../../assets/drug-interaction/diagnosis.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
