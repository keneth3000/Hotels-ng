import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHotelRoutingModule } from './account-hotel-routing.module';
import { AccountHotelComponent } from './account-hotel.component';
import { SidebarHotelComponent } from '../../shared/components/sidebar-hotel/sidebar-hotel.component';
//Material
import { MaterialModule } from 'src/app/material.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG:PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [AccountHotelComponent, SidebarHotelComponent],
  imports: [
    CommonModule,
    AccountHotelRoutingModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AccountHotelModule { }
