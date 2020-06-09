import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'app-account-hotel',
  templateUrl: './account-hotel.component.html',
  styleUrls: ['./account-hotel.component.scss']
})
export class AccountHotelComponent implements OnInit {

  constructor(public sidebarService:SidebarService) { }

  ngOnInit(): void {
  }

  getSideBarState(){
    return this.sidebarService.getSidebarState();
  }

}
