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

}