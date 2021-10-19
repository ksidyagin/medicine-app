import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchTypeService {
  constructor(private http: HttpClient) {}
  API = 'https://datahackapi.herokuapp.com';

  getSearchs() {
    return this.http
      .get<any>(this.API + '/get_users')
      .toPromise()
      .then(res => <any[]>res.items)
      .then(data => {
        return data;
      });
  }
}
