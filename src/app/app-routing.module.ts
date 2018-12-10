import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessDeniedComponent} from './shared/access-denied/access-denied.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminGuard} from './auth/guards/admin.guard';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {DroneListComponent} from './drone/drone-list/drone-list.component';
import {DroneDetailsComponent} from './drone/drone-details/drone-details.component';
import {ManufacturerDetailsComponent} from './manufacturer/manufacturer-details/manufacturer-details.component';
import {DroneListAdminComponent} from "./drone/drone-list-admin/drone-list-admin.component";
import {DroneAddComponent} from "./drone/drone-add/drone-add.component";
import {ManufacturerAddComponent} from "./manufacturer/manufacturer-add/manufacturer-add.component";
import {ManufacturerListComponent} from "./manufacturer/manufacturer-list/manufacturer-list.component";
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CheckoutComponent} from './checkout/checkout.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customers', component: CustomerListComponent},
  {path: 'denied' , component: AccessDeniedComponent},
  {path: 'login', component: LoginComponent},
  { path: 'drones', component: DroneListComponent},
  { path: 'drones/:id', component: DroneDetailsComponent},
  { path: 'manufacturers/:id', component: ManufacturerDetailsComponent},
  { path: '', component: HomeComponent},
  { path: 'customers', component: CustomerListComponent},
  { path: 'drones-admin', component: DroneListAdminComponent},
  { path: 'drones-add', component: DroneAddComponent},
  { path: 'manufacturers-add', component: ManufacturerAddComponent},
  { path: 'manufacturers-list', component: ManufacturerListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
