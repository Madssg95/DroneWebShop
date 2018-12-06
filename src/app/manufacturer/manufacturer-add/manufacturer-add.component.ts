import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.css']
})
export class ManufacturerAddComponent implements OnInit {

  manufacturerForm = new FormGroup( {
    name: new FormControl(''),
  });

  constructor(private manufacturerService: ManufacturerService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    const manufacturer = this.manufacturerForm.value;
    this.manufacturerService.createManufacturer(manufacturer).subscribe(() => {
      this.router.navigateByUrl('/drones');
    })
  }

}
