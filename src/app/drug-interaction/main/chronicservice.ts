import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ChronicTypeService {
  constructor(private http: HttpClient) {}

  getChronics() {
    return this.http
      .get<any>('../../../assets/protiv.json')
      .toPromise()
      .then(res => <any[]>res.items)
      .then(data => {
        return data;
      });
  }
}
