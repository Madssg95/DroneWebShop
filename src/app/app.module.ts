import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone/drone-list/drone-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MzButtonModule, MzCardModule, MzInputModule, MzModalModule, MzParallaxModule} from 'ngx-materialize';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import { MzNavbarModule } from 'ngx-materialize';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    NavbarComponent,
    HomeComponent
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
    MzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
