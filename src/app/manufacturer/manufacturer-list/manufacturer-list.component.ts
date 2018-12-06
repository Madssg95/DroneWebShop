import { Component, OnInit } from '@angular/core';
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Manufacturer} from "../../shared/model/manufacturer";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {

  manufacturers: Manufacturer[];
  isUpdate = false;

  manufacturerForm = new FormGroup( {
    name: new FormControl(''),
  });

  constructor(private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
  }



}
