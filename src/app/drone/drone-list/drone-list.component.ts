import { Component, OnInit } from '@angular/core';
import {Drone} from "../../shared/model/drone";
import {DroneService} from "../../shared/services/drone.service";
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Manufacturer} from "../../shared/model/manufacturer";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  drones: Drone[];
  manufacturers: Manufacturer[];
  count: number;
  pageEvent: PageEvent;
  isSorted = false;

  constructor(private droneService: DroneService, private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.pageEvent = {
      pageIndex: 1,
      pageSize: 6,
      length: this.count
    };
    this.refresh();
  }

  refresh() {
    this.droneService.getDrones(this.pageEvent.pageIndex, this.pageEvent.pageSize, this.isSorted).subscribe(listOfDrones => {
      this.count = listOfDrones.count;
      this.drones = listOfDrones.list});
    this.manufacturerService.getManufacturers().subscribe(listOfManufacturers => (this.manufacturers = listOfManufacturers));
    console.log(this.count);
  }

  pageChange(currentPage: number) {
    this.pageEvent.pageIndex = currentPage;
    this.refresh();
  }
}
