import { Component, OnInit } from '@angular/core';
import {Drone} from "../../shared/model/drone";
import {ActivatedRoute} from "@angular/router";
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Manufacturer} from "../../shared/model/manufacturer";

@Component({
  selector: 'app-manufacturer-details',
  templateUrl: './manufacturer-details.component.html',
  styleUrls: ['./manufacturer-details.component.css']
})
export class ManufacturerDetailsComponent implements OnInit {

  manufacturer: Manufacturer;
  manufacturers: Manufacturer[];

  constructor(private route: ActivatedRoute, private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.manufacturerService.getManufacturerById(id).subscribe(singleManufacturer => {
      this.manufacturer = singleManufacturer;
    });
    this.manufacturerService.getManufacturers().subscribe(listOfManufacturers => (this.manufacturers = listOfManufacturers));
  }

  refresh(){}

}
