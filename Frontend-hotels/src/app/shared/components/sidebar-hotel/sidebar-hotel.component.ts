import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-hotel',
  templateUrl: './sidebar-hotel.component.html',
  styleUrls: ['./sidebar-hotel.component.scss']
})
export class SidebarHotelComponent implements OnInit {

  menus = []
  constructor(public sidebarService:SidebarService) {
    this.menus = this.sidebarService.getMenuListHotel();
  }

  ngOnInit(): void {
  }

}
