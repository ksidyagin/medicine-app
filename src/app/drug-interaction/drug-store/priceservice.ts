import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PriceTypeService {
  constructor(private http: HttpClient) {}

  getPrices() {
    return this.http
      .get<any>('../../../assets/drug-interaction/price.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
