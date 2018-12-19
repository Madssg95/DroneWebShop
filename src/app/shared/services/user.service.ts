import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";
import {Customer} from '../model/customer';
import {TokenService} from './token.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private tokenServive: TokenService) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.apiUrl + 'users', user);
  }

  getUserCustomerInfo(username: String): Observable<Customer> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.get<Customer>(environment.apiUrl + 'users/' + username, httpOptions);
  }


}
