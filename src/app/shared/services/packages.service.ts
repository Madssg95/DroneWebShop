import {HttpClient} from '@angular/common/http';
import {Packages} from '../model/packages';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(public http: HttpClient) { }

  getPackages(): Observable<Packages[]> {
    return this.http.get<Packages[]>(environment.apiUrl + 'package');
  }

  getPackageById(id: number): Observable<Packages> {
    return this.http.get<Packages>(environment.apiUrl + 'package/' + id);
  }

  createPackage(packages: Packages): Observable<Packages> {
    return this.http.post<Packages>(environment.apiUrl + 'package', packages);
  }

  updatePackage(packages: Packages): Observable<Packages> {
    return this.http.put<Packages>(environment.apiUrl + 'package/' + packages.id, packages);
  }

  deletePackage(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'package/' + id);
  }
}
