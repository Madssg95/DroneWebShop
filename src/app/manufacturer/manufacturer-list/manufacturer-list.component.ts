import { Component, OnInit } from '@angular/core';
import {ManufacturerService} from "../../shared/services/manufacturer.service";
import {Manufacturer} from "../../shared/model/manufacturer";
import {FormControl, FormGroup} from "@angular/forms";
import {Drone} from "../../shared/model/drone";

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {

  manufacturers: Manufacturer[];
  isUpdate = false;

  manufacturerForm = new FormGroup( {
    id: new FormControl(''),
    name: new FormControl('')
  });

  constructor(private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  setUpdate(manufacturerUpdate: Manufacturer){
    this.isUpdate = true;
    this.manufacturerForm.patchValue( {
      id: manufacturerUpdate.id,
      name: manufacturerUpdate.name
    });
  }


  resetUpdate(){
    this.isUpdate = false;
  }

  update() {
    debugger;
    const manufacturerFormFields = this.manufacturerForm.value;
    const manufacturer = {
      id: manufacturerFormFields.id,
      name: manufacturerFormFields.name
    };

    this.manufacturerService.updateManufacturer(manufacturer as Manufacturer).subscribe(() => {
      this.refresh();
    });
  }

  delete(id: number) {
    this.manufacturerService.deleteManufacturer(id).subscribe(() => {
      this.refresh();
    });
  }

}
