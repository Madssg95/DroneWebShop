import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone/drone-list/drone-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MzButtonModule, MzCardModule, MzCollapsibleModule, MzInputModule, MzModalModule, MzParallaxModule} from 'ngx-materialize';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TokenService} from './shared/services/token.service';
import {LoginService} from './shared/services/login.service';
import {AuthGuard} from './auth/guards/auth.guard';
import {AdminGuard} from './auth/guards/admin.guard';
import { MzNavbarModule } from 'ngx-materialize';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DroneDetailsComponent } from './drone/drone-details/drone-details.component';
import { ManufacturerDetailsComponent } from './manufacturer/manufacturer-details/manufacturer-details.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    AccessDeniedComponent,
    LoginComponent,
    NavbarComponent,
    DroneDetailsComponent,
    ManufacturerDetailsComponent,
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
    MzCardModule,
    MzNavbarModule,
    MzParallaxModule,
    MzModalModule,
    MzCardModule,
    MzCollapsibleModule

  ],
  providers: [TokenService,
    LoginService,
    AuthGuard,
    AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
