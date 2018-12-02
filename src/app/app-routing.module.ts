import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DroneListComponent} from "./drone/drone-list/drone-list.component";
import {DroneDetailsComponent} from "./drone/drone-details/drone-details.component";

const routes: Routes = [
  { path: 'drones', component: DroneListComponent},
  { path: 'drones/:id', component: DroneDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
