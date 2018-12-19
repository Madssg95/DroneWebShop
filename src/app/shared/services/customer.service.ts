import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {environment} from "../../../environments/environment";
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
export class CustomerService {

  constructor(private http: HttpClient, private tokenServive: TokenService) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + 'customers');
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + 'customers/' + id);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(environment.apiUrl + 'customers', customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(environment.apiUrl + 'customers/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.delete(environment.apiUrl + 'customers/' + id, httpOptions);
  }
}
