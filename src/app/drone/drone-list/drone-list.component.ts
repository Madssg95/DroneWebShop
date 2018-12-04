import { Component, OnInit } from '@angular/core';
import {Drone} from "../../shared/model/drone";
import {DroneService} from "../../shared/services/drone.service";
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Manufacturer} from "../../shared/model/manufacturer";

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  drones: Drone[];
  manufacturers: Manufacturer[];

  constructor(private droneService: DroneService, private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.droneService.getDrones().subscribe(listOfDrones => {this.drones = listOfDrones});
    this.manufacturerService.getManufacturers().subscribe(listOfManufacturers => (this.manufacturers = listOfManufacturers));

  }


}
