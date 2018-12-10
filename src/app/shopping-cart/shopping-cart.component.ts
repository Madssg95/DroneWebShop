import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../shared/services/shopping-cart.service';
import {Drone} from '../shared/model/drone';
import {OrderLine} from '../shared/model/orderLine';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private orderLines: OrderLine[];
  private subTotal = 0;

  constructor(private shoppingcartService: ShoppingCartService) { }

  ngOnInit() {
    this.orderLines = this.shoppingcartService.getDronesList();
  }

  removeItem(orderline: OrderLine) {
    this.shoppingcartService.removeItemFromLocal(orderline);
    this.orderLines = this.orderLines.filter(items => items !== orderline);

  }

  updateQty(orderLine: OrderLine) {
    this.shoppingcartService.updateQtyInLocal(orderLine);
  }


}
