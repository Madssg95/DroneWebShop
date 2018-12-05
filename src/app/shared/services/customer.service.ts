import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

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
    return this.http.delete(environment.apiUrl + 'customers/' + id);
  }
}
