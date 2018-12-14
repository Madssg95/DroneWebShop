import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.apiUrl + 'orders', order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiUrl + 'orders');
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'orders/' + id);
  }
}