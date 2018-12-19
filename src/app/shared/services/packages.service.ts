import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Packages} from '../model/packages';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {Injectable} from '@angular/core';
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
export class PackagesService {

  constructor(public http: HttpClient, private tokenServive: TokenService) { }

  getPackages(): Observable<Packages[]> {
    return this.http.get<Packages[]>(environment.apiUrl + 'package');
  }

  getPackageById(id: number): Observable<Packages> {
    return this.http.get<Packages>(environment.apiUrl + 'package/' + id);
  }

  createPackage(packages: Packages): Observable<Packages> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.post<Packages>(environment.apiUrl + 'package', packages, httpOptions);
  }

  updatePackage(packages: Packages): Observable<Packages> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.put<Packages>(environment.apiUrl + 'package/' + packages.id, packages, httpOptions);
  }

  deletePackage(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.delete(environment.apiUrl + 'package/' + id, httpOptions);
  }
}
