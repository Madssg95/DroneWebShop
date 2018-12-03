import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DroneListComponent} from './drone/drone-list/drone-list.component';
import {AccessDeniedComponent} from './shared/access-denied/access-denied.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminGuard} from './auth/guards/admin.guard';

const routes: Routes = [
  { path: 'drones', component: DroneListComponent},
  { path: '', component: DroneListComponent},
  {path: 'denied' , component: AccessDeniedComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
