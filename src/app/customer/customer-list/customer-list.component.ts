import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../shared/services/customer.service";
import {Customer} from "../../shared/model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  isUpdate = false;
  customer: Customer;


  customerForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }


  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    this.isUpdate = false;
  }

  setUpdate(customerUpdate: Customer){
    this.isUpdate = true;
      this.customerForm.patchValue({
        id: customerUpdate.id,
        firstName: customerUpdate.firstName,
        lastName: customerUpdate.lastName,
        address: customerUpdate.address,
        phoneNumber: customerUpdate.phoneNumber,
        email: customerUpdate.email
      });
    }

  resetUpdate(){
    this.isUpdate = false;
  }

  update() {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(customer)
      .subscribe(() => {
        this.refresh();
      });
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
    this.refresh();
  });
}

}
