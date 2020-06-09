import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninHotelComponent } from './signin-hotel.component';

const routes: Routes = [{ path: '', component: SigninHotelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninHotelRoutingModule { }
