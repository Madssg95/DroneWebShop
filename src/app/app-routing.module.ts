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
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {AuthGuard} from './auth/guards/auth.guard';
import {CheckoutComponent} from './checkout/checkout.component';
import {MyProfileComponent} from './my-profile/my-profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'denied' , component: AccessDeniedComponent},
  {path: 'login', component: LoginComponent},
  { path: 'drones', component: DroneListComponent},
  { path: 'drones/:id', component: DroneDetailsComponent},
  { path: 'manufacturers/:id', component: ManufacturerDetailsComponent},
  {path: 'sign-up', component: SignUpComponent},
  { path: 'drones-admin', component: DroneListAdminComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'drones-add', component: DroneAddComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'manufacturers-add', component: ManufacturerAddComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'manufacturers-list', component: ManufacturerListComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  {path: 'myProfile', component: MyProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
