import { Component, OnInit } from '@angular/core';
import {packagesService} from '../shared/services/packages.service';
import {Packages} from '../shared/model/packages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  packagesList: Packages[]

  constructor(private packageService: packagesService) {
  }

  ngOnInit() {

    this.packageService.getPackages().subscribe(retrievedPackages => {this.packagesList = retrievedPackages;});
  }
}

