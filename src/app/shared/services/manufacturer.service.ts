import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manufacturer} from "../model/manufacturer";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { }

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
    return this.http.post<Manufacturer>(environment.apiUrl + 'manufacturers/', manufacturer);
  }

  updateManufacturer(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this.http.put<Manufacturer>(environment.apiUrl + 'manufacturers/' + manufacturer.id, manufacturer);
  }

  deleteManufacturer(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'manufacturers/' + id);
  }

}
