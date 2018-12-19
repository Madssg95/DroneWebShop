import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  // public isLoggedIn = new Subject<string>();
  public isLoggedIn = new BehaviorSubject<boolean>(!!this.getRequestToken());

  constructor() {}

  public getToken(): string {
    return JSON.parse(localStorage.getItem('token')).token;
  }

  public getRequestToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.next(!!token);
  }

  public clearToken() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(undefined);
  }

  public isAuthenticated(): Observable<boolean> {
    // get the token and notify listeners!
    return Observable.create(obs => {
      obs.next(this.getRequestToken());
    });
  }

  public getUserFromToken(): Observable<User> {
    return Observable.create(obs => {
      const token = this.getRequestToken();
      let decoded: User;
      if (token) {
        const jwt = new JwtHelperService();
        decoded = jwt.decodeToken(token);
        console.log(jwt.decodeToken(token));
      }
      obs.next(decoded);
    });

  }
}
