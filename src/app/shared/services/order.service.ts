import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
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
export class OrderService {

  constructor(private http: HttpClient, private tokenServive: TokenService) { }

  createOrder(order: Order): Observable<Order> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());
    return this.http.post<Order>(environment.apiUrl + 'orders', order, httpOptions);
  }

  deleteOrder(id: number): Observable<Order> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());
    return this.http.delete<Order>(environment.apiUrl + 'orders/' + id, httpOptions);
  }

  getOrders(): Observable<Order[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());
    return this.http.get<Order[]>(environment.apiUrl + 'orders', httpOptions);
  }
}
