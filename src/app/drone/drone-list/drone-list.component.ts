import { Component, OnInit } from '@angular/core';
import {Drone} from '../../shared/model/drone';
import {DroneService} from '../../shared/services/drone.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  drones: Drone[];

  constructor(private droneService: DroneService) { }

  ngOnInit() {
    this.droneService.getDrones().subscribe(listOfDrones => {this.drones = listOfDrones});
  }


}
