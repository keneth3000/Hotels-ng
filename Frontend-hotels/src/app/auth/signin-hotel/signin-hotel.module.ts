import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninHotelRoutingModule } from './signin-hotel-routing.module';
import { SigninHotelComponent } from './signin-hotel.component';


@NgModule({
  declarations: [SigninHotelComponent],
  imports: [
    CommonModule,
    SigninHotelRoutingModule
  ]
})
export class SigninHotelModule { }
