import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DroneService} from '../../shared/services/drone.service';
import {Drone} from '../../shared/model/drone';
import {MzToastService} from 'ngx-materialize';
import {ShoppingCartService} from '../../shared/services/shopping-cart.service';
import {OrderLine} from '../../shared/model/orderLine';

@Component({
  selector: 'app-drone-details',
  templateUrl: './drone-details.component.html',
  styleUrls: ['./drone-details.component.css']
})
export class DroneDetailsComponent implements OnInit {
  drone: Drone;
  qty = 1;

  constructor(private route: ActivatedRoute,
              private droneService: DroneService,
              private toastService: MzToastService,
              private shoppingcartService: ShoppingCartService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.droneService.getDroneById(id).subscribe(singleDrone => {
      this.drone = singleDrone;
    });
  }

  addToCart(drone: Drone) {

    const orderLine = new OrderLine();

    orderLine.droneId = drone.id
    orderLine.drone = drone;
    orderLine.boughtPrice = drone.price;
    orderLine.qty = this.qty;

    this.shoppingcartService.addToCart(orderLine);
    this.showToast();
  }

  showToast() {
    this.toastService.show('Produktet er blevet tilføjet til din kurv :)', 4000, 'grey');
  }


}
