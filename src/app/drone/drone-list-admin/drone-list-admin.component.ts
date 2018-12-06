import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DroneService} from "../../shared/services/drone.service";
import {Drone} from "../../shared/model/drone";
import {FormControl, FormGroup} from "@angular/forms";
import {Manufacturer} from "../../shared/model/manufacturer";
import {ManufacturerService} from "../../shared/services/manufacturer.service";

@Component({
  selector: 'app-drone-list-admin',
  templateUrl: './drone-list-admin.component.html',
  styleUrls: ['./drone-list-admin.component.css']
})
export class DroneListAdminComponent implements OnInit {

  drones: Drone[];
  isUpdate = false;
  manufacturers: Manufacturer[];
  oldManufacturerID: number;

  droneForm = new FormGroup( {
    id: new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    details: new FormControl(''),
    imageURL: new FormControl(''),
    manufacturer: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private droneService: DroneService, private router: Router, private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.refresh();
    this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  private refresh() {
    this.droneService.getDronesWithManufacturers().subscribe(drones => this.drones = drones);
    this.isUpdate = false;
  }

  setUpdate(droneUpdate: Drone){
    this.isUpdate = true;
    this.droneForm.patchValue( {
      id: droneUpdate.id,
      productName: droneUpdate.productName,
      price: droneUpdate.price,
      details: droneUpdate.details,
      imageURL: droneUpdate.imageURL
    });
    this.oldManufacturerID = droneUpdate.manufacturer.id;

  }

  resetUpdate(){
    this.isUpdate = false;
  }

  update() {
    debugger;
    const droneFormFields = this.droneForm.value;
    const drone = {
      id: droneFormFields.id,
      productName: droneFormFields.productName,
      price: droneFormFields.price,
      details: droneFormFields.details,
      imageURL: droneFormFields.imageURL,
      manufacturer: {id: droneFormFields.manufacturer}
    };
    if (drone.manufacturer.id == "") {
      drone.manufacturer.id = this.oldManufacturerID;
    }
    this.droneService.updateDrones(drone as Drone).subscribe(() => {
      this.refresh();
    });
  }

  delete(id: number) {
    this.droneService.deleteDrone(id).subscribe(() => {
      this.refresh();
    });
  }
}
