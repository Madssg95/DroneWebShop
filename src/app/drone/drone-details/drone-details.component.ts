import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DroneService} from '../../shared/services/drone.service';
import {Drone} from '../../shared/model/drone';
import {MzToastService} from 'ngx-materialize';

@Component({
  selector: 'app-drone-details',
  templateUrl: './drone-details.component.html',
  styleUrls: ['./drone-details.component.css']
})
export class DroneDetailsComponent implements OnInit {
  drone: Drone;

  constructor(private route: ActivatedRoute,
              private droneService: DroneService,
              private toastService: MzToastService) { }

  ngOnInit() {
    debugger;
    const id = +this.route.snapshot.paramMap.get('id');
    this.droneService.getDroneById(id).subscribe(singleDrone => {
      this.drone = singleDrone;
    });
    debugger;
  }

  showToast() {
    this.toastService.show('Produktet er blevet tilføjet til din kurv :)', 4000, 'grey');
  }

}
