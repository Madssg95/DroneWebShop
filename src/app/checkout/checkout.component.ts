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

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private orders: OrderLine[];

  private subscription: Subscription;

  private loggedIn: boolean;
  private userName: string;
  private userRole: string;

  private customer: Customer;

  constructor(private cartService: ShoppingCartService, private tokenService: TokenService, private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        switchMap(isLoggedIn => {this.loggedIn = isLoggedIn; return this.tokenService.getUserFromToken(); })
      ).subscribe(user => {this.userName = user ? user.userName : ''; this.userRole = user ? user.role : ''; this.readCustomerFromUser();
     });

    this.orders = this.cartService.getDronesList();
  }


  readCustomerFromUser() {
    this.userService.getUserCustomerInfo(this.userName).subscribe(customer => {this.customer = customer; console.log(this.customer);
    });
  }

}
