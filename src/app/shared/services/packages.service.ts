import {HttpClient} from '@angular/common/http';
import {packages} from '../model/packages';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class packagesService{

  constructor(public http: HttpClient) { }

  getPackages(): Observable<packages[]> {
    return this.http.get<packages[]>(environment.apiUrl + 'package');
  }

  getPackageById(id: number): Observable<packages> {
    return this.http.get<packages>(environment.apiUrl + 'package/' + id);
  }

  createPackage(packages: packages): Observable<packages> {
    return this.http.post<packages>(environment.apiUrl + 'package', packages);
  }

  updatePackage(packages: packages): Observable<packages> {
    return this.http.put<packages>(environment.apiUrl + 'package/' + packages.id, packages);
  }

  deletePackage(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'package/' + id);
  }
}
