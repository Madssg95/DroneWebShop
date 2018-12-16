import { Component, OnInit } from '@angular/core';
import {Order} from "../../shared/model/order";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../../shared/services/order.service";
import {OrderLine} from "../../shared/model/orderLine";

@Component({
  selector: 'app-order-list-admin',
  templateUrl: './order-list-admin.component.html',
  styleUrls: ['./order-list-admin.component.css']
})
export class OrderListAdminComponent implements OnInit {

  orders: Order[];
  isUpdate = false;


  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
    this.isUpdate = false;
  }
/*
  setUpdate() {
    this.isUpdate = true;
  }

  resetUpdate(){
    this.isUpdate = false;
  }

  update(orderUpdate: Order){
    const orderToSave = new Order();
    orderToSave.id = orderUpdate.id;
    orderToSave.customer = {id: orderUpdate.customer.id};
    const oLines: OrderLine[] = [];
    orderUpdate.orderLines.forEach(ol => {
      oLines.push({
        droneId: ol.drone.id,
        orderId: orderUpdate.id,
        qty: ol.qty,
        boughtPrice: ol.drone.price});
    });
  }
*/

  delete(id: number) {
    this.orderService.deleteOrder(id).subscribe(() => this.refresh());
  }

}
