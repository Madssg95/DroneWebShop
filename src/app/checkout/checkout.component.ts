import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/services/login.service';
import {TokenService} from '../shared/services/token.service';
import {Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Customer} from '../shared/model/customer';
import {User} from '../shared/model/user';
import {UserService} from '../shared/services/user.service';
import {OrderLine} from '../shared/model/orderLine';
import {ShoppingCartService} from '../shared/services/shopping-cart.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Order} from '../shared/model/order';
import {OrderService} from '../shared/services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public modalOptions: Materialize.ModalOptions = {
    dismissible: false

  };

   orders: OrderLine[];
   subTotal = 0;
   customerID = new Customer();
   message: string;

  private subscription: Subscription;

  private loggedIn: boolean;
   userName: string;
   userRole: string;

   customer: Customer;

  constructor(private cartService: ShoppingCartService, private tokenService: TokenService, private userService: UserService, private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        switchMap(isLoggedIn => {this.loggedIn = isLoggedIn; return this.tokenService.getUserFromToken(); })
      ).subscribe(user => {this.userName = user ? user.userName : ''; this.userRole = user ? user.role : ''; this.readCustomerFromUser();
     });

    this.orders = this.cartService.getDronesList();
    this.subTotalCalculate();
  }


  readCustomerFromUser() {
    this.userService.getUserCustomerInfo(this.userName).subscribe(customer => {this.customer = customer; console.log(this.customer);
    });
  }

  subTotalCalculate() {
    for (let order of this.orders) {

      this.subTotal = this.subTotal + (order.boughtPrice * order.qty);

    }
    console.log(this.subTotal);
  }

  createOrder() {

    const order: Order = {
      customer: {id: this.customer.id},
      orderDate: new Date(),
      orderLines: []
    };

    for(let orderlines of this.orders) {

      order.orderLines.push({
        droneId: orderlines.droneId,
        qty: orderlines.qty,
        boughtPrice: orderlines.boughtPrice
      });
    }

    this.orderService.createOrder(order as Order).subscribe(success => {
        this.message = 'Din ordre er modtaget. Tak for din bestilling!';
        alert(this.message);
        this.cartService.clearLocalStorage(this.orders);
        this.router.navigateByUrl('/');
      },
      error => {
        this.message = 'Der opstod en fejl ved din bestilling.' + error.message;
      });



  }
}
