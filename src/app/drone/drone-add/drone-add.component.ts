import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DroneService} from "../../shared/services/drone.service";
import {Router} from "@angular/router";
import {Drone} from "../../shared/model/drone";
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Manufacturer} from "../../shared/model/manufacturer";

@Component({
  selector: 'app-drone-add',
  templateUrl: './drone-add.component.html',
  styleUrls: ['./drone-add.component.css']
})
export class DroneAddComponent implements OnInit {

  droneForm = new FormGroup( {
    productName: new FormControl(''),
    price: new FormControl(''),
    details: new FormControl(''),
    imageURL: new FormControl(''),
    manufacturer: new FormControl('')
  });

  isNewManufacturer= false;

  manufacturers: Manufacturer[];

  constructor(private droneService: DroneService, private router: Router, private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  setIsNewManufacturer(state: boolean) {
    this.isNewManufacturer = state;
  }

  create(){
    debugger;
    const droneFormFields = this.droneForm.value;
    const drone = {
      productName: droneFormFields.productName,
      price: droneFormFields.price,
      details: droneFormFields.details,
      imageURL: droneFormFields.imageURL,
      manufacturer: {name: droneFormFields.manufacturer},
    };

    this.droneService.createDrone(drone as Drone).subscribe(() => {
      this.router.navigateByUrl('/drones');
    });
  }

}
