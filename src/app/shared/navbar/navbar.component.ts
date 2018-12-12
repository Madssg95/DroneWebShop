import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from '../services/login.service';
import {TokenService} from '../services/token.service';
import {Subscription} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loggedIn: boolean;
  userName: string;
  userAdminStatus: boolean;

  constructor(private loginService: LoginService, private tokenService: TokenService) {}

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        switchMap(isLoggedIn => {this.loggedIn = isLoggedIn; return this.tokenService.getUserFromToken(); })
      ).subscribe(user => {this.userName = user ? user.userName : ''; this.userAdminStatus = user ? user.IsAdmin : false; });

    console.log(this.userAdminStatus);
    console.log(this.userName);
    console.log(this.loggedIn);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout(event) {
    this.loginService.logout()
      .pipe(
        take(1)
      ).subscribe(() => {
      this.loggedIn = false;
    });
  }

}
