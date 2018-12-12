import { Component, OnInit } from '@angular/core';
import {Customer} from "../../shared/model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../shared/services/customer.service";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  customer: Customer;
  user: User;
  errorMessage: '';
  submitted = false;

  customerForm = new FormGroup( {
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.minLength(4)]),
    city: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private customerService: CustomerService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  get f() { return this.customerForm.controls; }

  create(){
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    const newFormFields = this.customerForm.value;
    const newUser = {
      userName: newFormFields.username,
      password: newFormFields.password
    };

    let newCustomer = {
      firstName: newFormFields.firstName,
      lastName: newFormFields.lastName,
      address: newFormFields.address.concat(newFormFields.postalCode.toString()).concat(newFormFields.city),
      phoneNumber: newFormFields.phoneNumber,
      email: newFormFields.email,
      user: null,
      userId: null
    };

    this.userService.createUser(newUser as User).subscribe(user => {
    newCustomer.user = {id: user.id};
    newCustomer.userId = user.id;
    console.log(user.id, user.userName)
    debugger;
      this.customerService.createCustomer(newCustomer as Customer).subscribe(() => {
          debugger;
          this.router.navigate(['/login']);},
        error => {
          this.errorMessage = error.message;
        });
    });


  }

}
