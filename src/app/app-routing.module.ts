import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DroneListComponent} from "./drone/drone-list/drone-list.component";

const routes: Routes = [
  { path: 'drones', component: DroneListComponent},
  { path: '', component: DroneListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
