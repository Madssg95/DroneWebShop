import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.apiUrl + 'users', user);
  }

  getUserCustomerInfo(username: String): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + 'users/' + username);
  }


}
