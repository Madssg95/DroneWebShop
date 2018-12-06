import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DroneService} from "../../shared/services/drone.service";
import {Drone} from "../../shared/model/drone";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-drone-list-admin',
  templateUrl: './drone-list-admin.component.html',
  styleUrls: ['./drone-list-admin.component.css']
})
export class DroneListAdminComponent implements OnInit {

  drones: Drone[];
  drone: Drone;
  isUpdate = false;

  droneForm = new FormGroup( {
    id: new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    details: new FormControl(''),
    imageURL: new FormControl(''),
    manufacturer: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private droneService: DroneService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.droneService.getDrones().subscribe(drones => this.drones = drones);
    this.isUpdate = false;
  }

  setUpdate(droneUpdate: Drone){
    this.isUpdate = true;
    this.droneForm.patchValue( {
      id: droneUpdate.id,
      poductName: droneUpdate.productName,
      price: droneUpdate.price,
      details: droneUpdate.details,
      imageURL: droneUpdate.imageURL,
      manufacturer: droneUpdate.manufacturer
    });
  }

  resetUpdate(){
    this.isUpdate = false;
  }

  update() {
    const drone = this.droneForm.value;
    this.droneService.updateDrones(drone).subscribe(() => {
      this.refresh();
    });
  }

  delete(id: number) {
    this.droneService.deleteDrone(id).subscribe(() => {
      this.refresh();
    });
  }
}
