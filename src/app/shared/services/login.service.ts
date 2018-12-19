import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../model/user';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
const url = environment.apiUrl;

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  public login(user: User): Observable<string> {
    return this.http.post<string>(url + '/Token', user , {responseType: 'text' as 'json'})
      .pipe(
        switchMap(token => Observable.create(obs => {this.tokenService.setToken(token);
        obs.next(token);
          })
        )
      );



  }

  public logout(): Observable<boolean> {
    return Observable.create(obs => {
      this.tokenService.clearToken();
      obs.next(!this.tokenService.getRequestToken());
    });
  }
}
