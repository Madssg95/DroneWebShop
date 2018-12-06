import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone/drone-list/drone-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MzButtonModule, MzCardModule, MzCollapsibleModule, MzInputModule, MzModalModule, MzParallaxModule} from 'ngx-materialize';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { MzNavbarModule } from 'ngx-materialize';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DroneDetailsComponent } from './drone/drone-details/drone-details.component';
import { ManufacturerDetailsComponent } from './manufacturer/manufacturer-details/manufacturer-details.component'
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component'






@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    NavbarComponent,
    DroneDetailsComponent,
    ManufacturerDetailsComponent,
    HomeComponent,
    CustomerDetailsComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MzNavbarModule,
    MzParallaxModule,
    MzModalModule,
    MzCardModule,
    MzCollapsibleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
