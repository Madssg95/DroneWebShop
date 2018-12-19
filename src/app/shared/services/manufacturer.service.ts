import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Manufacturer} from "../model/manufacturer";
import {environment} from "../../../environments/environment.prod";
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
export class ManufacturerService {

  constructor(private http: HttpClient, private tokenServive: TokenService) { }

  getManufacturers(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(environment.apiUrl + 'manufacturers');
  }

  getManufacturersIncludeDrones(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(environment.apiUrl + 'manufacturers?includeOtherEntity=true')
  }

  getManufacturerById(id: number): Observable<Manufacturer> {
    return this.http.get<Manufacturer>(environment.apiUrl + 'manufacturers/' + id);
  }

  createManufacturer(manufacturer: Manufacturer): Observable<Manufacturer> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.post<Manufacturer>(environment.apiUrl + 'manufacturers/', manufacturer, httpOptions);
  }

  updateManufacturer(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this.http.put<Manufacturer>(environment.apiUrl + 'manufacturers/' + manufacturer.id, manufacturer);
  }

  deleteManufacturer(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());

    return this.http.delete(environment.apiUrl + 'manufacturers/' + id, httpOptions);
  }

}
