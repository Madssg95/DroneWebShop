import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../shared/services/shopping-cart.service';
import {TokenService} from '../shared/services/token.service';
import {UserService} from '../shared/services/user.service';
import {OrderService} from '../shared/services/order.service';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Customer} from '../shared/model/customer';
import {CustomerService} from '../shared/services/customer.service';
import {error} from 'util';
import {Order} from '../shared/model/order';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private userName: string;
  private loggedIn: boolean;
  private userRole: string;
  private subscription: Subscription;
  private customer: Customer;
  private oldCustomer: Customer;
  private customerOrders: Order[];

  isUpdating: boolean;

  constructor(private cartService: ShoppingCartService, private tokenService: TokenService, private userService: UserService, private orderService: OrderService, private customerService: CustomerService) {}

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        switchMap(isLoggedIn => {this.loggedIn = isLoggedIn; return this.tokenService.getUserFromToken(); })
      ).subscribe(user => {this.userName = user ? user.userName : ''; this.userRole = user ? user.role : ''; this.readCustomerFromUser();
      });

  }


  readCustomerFromUser() {
    if (this.loggedIn && this.userRole !== 'Administrator') {
      this.userService.getUserCustomerInfo(this.userName).subscribe(customer => {
        this.customer = customer; this.oldCustomer = customer; this.getCustomerById(customer.id); });
    }

  }

  getCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe(customer => {this.customerOrders = customer.orders; },
      error1 => {alert(error1.message); }
    );
  }

  updateCustomerInfo() {

    this.customerService.updateCustomer(this.customer).subscribe(
      customer => {this.oldCustomer = customer; this.isUpdating = false; },
      errorl => {alert(errorl.message); }
    );

  }

  resetCustomerInfo() {
    this.customer = this.oldCustomer;
    this.isUpdating = false;
  }


}
