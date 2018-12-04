import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DroneListComponent} from './drone/drone-list/drone-list.component';
import {AccessDeniedComponent} from './shared/access-denied/access-denied.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminGuard} from './auth/guards/admin.guard';
import {DroneDetailsComponent} from './drone/drone-details/drone-details.component';
import {ManufacturerDetailsComponent} from './manufacturer/manufacturer-details/manufacturer-details.component';

const routes: Routes = [
  { path: 'drones', component: DroneListComponent},
  {path: 'denied' , component: AccessDeniedComponent},
  {path: 'login', component: LoginComponent},
  { path: 'drones', component: DroneListComponent},
  { path: 'drones/:id', component: DroneDetailsComponent},
  { path: 'manufacturers/:id', component: ManufacturerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
