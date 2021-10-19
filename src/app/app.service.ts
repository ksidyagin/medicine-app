import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api: string = 'http://localhost:8000/';
  constructor(private http: HttpClient) {

  }
  mas_str(mas: any){
    let st ='[';
    st=st+mas.join();
    st=st+']';
    return st
  }

  medfood(names: any){
    const  userar = this.http.get(this.api+'med?names='+this.mas_str(names));
    return userar;
  }

  medalco(names: any){
    const  userar = this.http.get(this.api+'med2?names='+this.mas_str(names));
    return userar;
  }


  about(name: any){
    const  userar = this.http.get(this.api+'about2?name='+name);
    return userar;
  }

  ill(name: any){
    const  userar = this.http.get(this.api+'ill?name='+name);
    return userar;
  }

  sale(name: any){
    const  userar = this.http.get(this.api+'sale?name='+name);
    return userar;
  }





}
