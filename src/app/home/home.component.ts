import {Component, OnDestroy, OnInit} from '@angular/core';
import {Packages} from '../shared/model/packages';
import {PackagesService} from '../shared/services/packages.service';
import {Subscription} from 'rxjs';
import {LoginService} from '../shared/services/login.service';
import {TokenService} from '../shared/services/token.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loggedIn: boolean;
  userRole: string;
  packages: Packages[];
  isUpdate = false;
  isCreate = false;

  packageID: number;
  serviceDescription: string;
  priceDescription: string;


  constructor(private loginService: LoginService, private tokenService: TokenService, private packageService: PackagesService) {
  }

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        switchMap(isLoggedIn => {
          this.loggedIn = isLoggedIn;
          return this.tokenService.getUserFromToken();
        })
      ).subscribe(user => {
        this.userRole = user ? user.role : '';
      });

    this.getPackages();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  createPackages() {

    const packages: Packages = {
      description: this.serviceDescription,
      price: this.priceDescription
    }

    this.packageService.createPackage(packages).subscribe( success => {this.serviceDescription = undefined;
      this.priceDescription = undefined;
      this.isCreate = false;
      this.getPackages(); });

  }

  getPackages() {
    this.packageService.getPackages().subscribe( packageList => this.packages = packageList);

  }

  deletePackages(id: number) {
    this.packageService.deletePackage(id).subscribe( success => this.packages.filter(packages => this.getPackages()));
  }

  AbortPackages() {
    this.serviceDescription = undefined;
    this.priceDescription = undefined;
    this.isCreate = false;
  }


  editInit(packages: Packages) {
    this.packageID = packages.id;
    this.serviceDescription = packages.description;
    this.priceDescription = packages.price;
    this.isUpdate = true;
  }


  cancelUpdate() {
    this.serviceDescription = undefined;
    this.priceDescription = undefined;
    this.isUpdate = false;
  }

  update() {
    const packages: Packages = {
      id: this.packageID,
      description: this.serviceDescription,
      price: this.priceDescription
    }


    this.packageService.updatePackage(packages).subscribe( success => {this.getPackages();
      this.packageID = undefined;
      this.serviceDescription = undefined;
      this.priceDescription = undefined;
      this.isUpdate = false; } );

    
  }
}

