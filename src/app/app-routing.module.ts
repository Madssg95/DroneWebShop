import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessDeniedComponent} from './shared/access-denied/access-denied.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminGuard} from './auth/guards/admin.guard';
import {HomeComponent} from './home/home.component';
import {DroneListComponent} from './drone/drone-list/drone-list.component';
import {DroneDetailsComponent} from './drone/drone-details/drone-details.component';
import {ManufacturerDetailsComponent} from './manufacturer/manufacturer-details/manufacturer-details.component';



const routes: Routes = [
  { path: 'drones', component: DroneListComponent},
  {path: 'denied' , component: AccessDeniedComponent},
  {path: 'login', component: LoginComponent},
  { path: 'drones', component: DroneListComponent},
  { path: 'drones/:id', component: DroneDetailsComponent},
  { path: 'manufacturers/:id', component: ManufacturerDetailsComponent},
  { path: 'drones', component: DroneListComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
