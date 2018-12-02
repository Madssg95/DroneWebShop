import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Drone} from "../model/drone";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private http: HttpClient) { }


  getDrones(): Observable<Drone[]> {
    return this.http.get<Drone[]>(environment.apiUrl + 'drones');
  }

  getDroneById(id: number): Observable<Drone> {
    return this.http.get<Drone>(environment.apiUrl + 'drones/' + id);
  }
}

