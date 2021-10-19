import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments';
import { Patient } from './models/patient.model';
import { Profile } from './models/profile.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // sendMail(email: string){
  //   return this.http.get(API + '/registration_code?email=' + email);
  // }


  
  // logout(){
  //   localStorage.removeItem('fio')
  //   localStorage.removeItem('id')
  //   location.reload()
  // }

  // isAuthenticated(): boolean{
  //   return localStorage.getItem('fio') === null ? false:true; 
  // }

  // find(): Observable<User[]> {

  //   return this.http.get<User[]>('http://192.168.1.92:8000/users');
  // }


  // updateOne(user: User) : Observable<User> {
  //   return this.http.put<User>('http://192.168.1.92:8000/users/'+ user.id, user);
  // }  



}
