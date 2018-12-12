import { Injectable } from '@angular/core';
import {Drone} from '../model/drone';
import {OrderLine} from '../model/orderLine';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  localStorageSupported: boolean;

  constructor() {
    this.localStorageSupported = typeof window['localStorage'] != 'undefined' && window['localStorage'] != null;
  }

  addToCart(orderLine: OrderLine) {

    if (this.localStorageSupported) {
      localStorage.setItem(String(orderLine.droneId), JSON.stringify(orderLine));
    }
  }


  getDronesList(): OrderLine[] {

    var list = new Array<OrderLine>();

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);

      if(key !== 'currentUser' && key !== 'token') {
        var value = JSON.parse(localStorage.getItem(key));
        list.push(value);
      }

    }
    return list;
  }

  removeItemFromLocal(orderline: OrderLine) {
    localStorage.removeItem(String(orderline.droneId));
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  updateQtyInLocal(orderLine: OrderLine) {
    localStorage.setItem(String(orderLine.droneId), JSON.stringify(orderLine));
  }
}
