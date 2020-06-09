import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountHotelComponent } from './account-hotel.component';

const routes: Routes = [{ path: '', component: AccountHotelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHotelRoutingModule { }
