import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private api: string = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }
  mas_str(mas: any){
    let st ='[';
    st=st+mas.join();
    st=st+']';
    return st
  }

  // tslint:disable-next-line:typedef
  get_anket(id:number){
    const res = this.http.get(this.api+'get_anket?id='+id);
    return res
  }
  complite_anket(anketid,stat,user,items){
    const res = this.http.get(this.api+'complite_anket?anket='+ anketid + '&status=' + stat + '&user=' + user +'&items=' + items);
    return res
  }
  about(name: any){
    const  userar = this.http.get(this.api + 'about2?name=' + name);
    return userar;
  }

}
