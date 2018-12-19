import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {Drone} from '../model/drone';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {FilteredDronesList} from "../model/filteredDronesList";
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
export class DroneService {


  constructor(private http: HttpClient, private tokenServive: TokenService) { }


  getDrones(currentPage: number, itemsPrPage: number,
            isSortedByPriceDescending: boolean,
            manufacturerId: number): Observable<FilteredDronesList> {

    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPerPage', itemsPrPage.toString())
      .set('IsSortedDescendingByPrice', String(isSortedByPriceDescending))
      .set('ManufacturerId', manufacturerId.toString());
    return this.http.get<FilteredDronesList>(environment.apiUrl + 'drones', {params: params});
  }

  getDronesWithManufacturers(): Observable<FilteredDronesList> {
    return this.http.get<FilteredDronesList>(environment.apiUrl + 'drones?includeOtherEntity=true');
  }

  getDroneById(id: number): Observable<Drone> {
    return this.http.get<Drone>(environment.apiUrl + 'drones/' + id);
  }

  updateDrones(drone: Drone): Observable<Drone> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());
    return this.http.put<Drone>(environment.apiUrl + 'drones/' + drone.id, drone, httpOptions);
  }

  deleteDrone(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());
    return this.http.delete(environment.apiUrl + 'drones/' + id, httpOptions);
  }

  createDrone(drone: Drone): Observable<Drone> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.tokenServive.getToken());
    return this.http.post<Drone>(environment.apiUrl + 'drones', drone, httpOptions);
  }
}

