import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments';
import { Patient } from '../../models/patient.model';
import { Profiles } from '../../models/profile.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // findOne(id: number): Observable<User> {
  //   return this.http.get<User>('/api/users/' + id);
  // }

  // find(): Observable<User[]> {

  //   return this.http.get<User[]>('/api/users');
  // }

  // create(user: User): Observable<User> {
  //   return this.http.post<User>('/api/users', user);
  // }

  updateOne(user: User) : Observable<User> {
    return this.http.put<User>(API + '/users/'+ user.id, user);
  }  

  // deleteOne(id: number): Observable<User> {
  //   return this.http.delete<User>('/api/users/' + id);
  // }

  findUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(API + '/users/findEmail/' + email);
  }

  verifyCode(code:string){
    return this.http.get(API + '/users/verify_code/' + code);
  }

  registration(email: string){
    const obj = {email: email};
    return this.http.post(API + '/users/registration', obj);
  }

  registrationPatient(patient: Patient){
    return this.http.post(API + '/patient/', patient);
  }

  registrationProfile(profile: Profiles){
    return this.http.post(API + '/profiles', profile);
  }
}
