import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone/drone-list/drone-list.component';
import {
  MzButtonModule,
  MzCardModule,
  MzCollapsibleModule,
  MzDropdownModule,
  MzInputModule,
  MzModalModule, MzPaginationModule,
  MzParallaxModule, MzSelectModule,
  MzSpinnerModule, MzToastModule
} from 'ngx-materialize';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MzNavbarModule } from 'ngx-materialize';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DroneDetailsComponent } from './drone/drone-details/drone-details.component';
import { ManufacturerDetailsComponent } from './manufacturer/manufacturer-details/manufacturer-details.component'
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component'
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { LoginComponent } from './auth/login/login.component';
import {TokenService} from './shared/services/token.service';
import {LoginService} from './shared/services/login.service';
import {AuthGuard} from './auth/guards/auth.guard';
import {AdminGuard} from './auth/guards/admin.guard';
import { DroneListAdminComponent } from './drone/drone-list-admin/drone-list-admin.component';
import { DroneAddComponent } from './drone/drone-add/drone-add.component';
import { ManufacturerAddComponent } from './manufacturer/manufacturer-add/manufacturer-add.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderListAdminComponent } from './order/order-list-admin/order-list-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    AccessDeniedComponent,
    LoginComponent,
    NavbarComponent,
    DroneDetailsComponent,
    ManufacturerDetailsComponent,
    HomeComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    DroneListAdminComponent,
    DroneAddComponent,
    ManufacturerAddComponent,
    ShoppingCartComponent,
    SignUpComponent,
    CheckoutComponent,
    MyProfileComponent,
    OrderListAdminComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MzCardModule,
    MzNavbarModule,
    MzParallaxModule,
    MzModalModule,
    MzCardModule,
    MzCollapsibleModule,
    MzSpinnerModule,
    MzDropdownModule,
    MzToastModule,
    MzSelectModule,
    MzPaginationModule,
    FormsModule,
  ],
  providers: [TokenService,
    LoginService,
    AuthGuard,
    AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
