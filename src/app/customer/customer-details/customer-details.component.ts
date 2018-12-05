import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../shared/services/customer.service";
import {Customer} from "../../shared/model/customer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(singleCustomer => this.customer = singleCustomer);
  }

}
