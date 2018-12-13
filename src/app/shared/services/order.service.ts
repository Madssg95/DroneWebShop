import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FilteredDronesList} from '../model/filteredDronesList';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.apiUrl + 'orders', order);
  }
}
