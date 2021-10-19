import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeTypeService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http
      .get<any>('../../../assets/drug-interaction/theme.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
