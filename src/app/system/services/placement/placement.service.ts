import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments';
import { Placement, PlacementDTO } from '../models/placement.model';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http: HttpClient) { }

   findOne(id: number)  {
    
    return this.http.get<any>(API + '/get_placements/' + id);
  }

  find(): Observable<any[]> {

    return this.http.get<any[]>(API + '/get_placements/')
  }

  createOne(place: PlacementDTO){
    return this.http.post(API + '/create_placement/', place)
  }

  getDadataAddress(str: string){
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    let token = "4088041ce005a1c419a2c0e0108602ed18356206";
    let query = str;
    
    let options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }
    
    fetch(url, options)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
  }
}
