import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Drone} from '../model/drone';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FilteredDronesList} from "../model/filteredDronesList";

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private http: HttpClient) { }


  getDrones(currentPage: number, itemsPrPage: number, isSortedByPriceDescending: boolean): Observable<FilteredDronesList> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPerPage', itemsPrPage.toString())
      .set('IsSortedDescendingByPrice', String(isSortedByPriceDescending));
    return this.http.get<FilteredDronesList>(environment.apiUrl + 'drones', {params: params});
  }

  getDronesWithManufacturers(): Observable<FilteredDronesList> {
    return this.http.get<FilteredDronesList>(environment.apiUrl + 'drones?includeOtherEntity=true');
  }

  getDroneById(id: number): Observable<Drone> {
    return this.http.get<Drone>(environment.apiUrl + 'drones/' + id);
  }

  updateDrones(drone: Drone): Observable<Drone> {
    return this.http.put<Drone>(environment.apiUrl + 'drones/' + drone.id, drone);
  }

  deleteDrone(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'drones/' + id);
  }

  createDrone(drone: Drone): Observable<Drone> {
    return this.http.post<Drone>(environment.apiUrl + 'drones', drone);
  }
}

