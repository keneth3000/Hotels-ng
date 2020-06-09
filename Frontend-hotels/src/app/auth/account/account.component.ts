import { Component } from '@angular/core';
import { SidebarService } from '../../shared/components/sidebar/sidebar.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent{

  constructor(public sidebarService:SidebarService) {}

  toggleSidebar(){
    this.sidebarService.setSidebarState(!this.sidebarService.getSidebarState());
  }

  toggleBackgroundImage(){
    this.sidebarService.hasBackgroundImage = !this.sidebarService.hasBackgroundImage;
  }
  getSideBarState(){
    return this.sidebarService.getSidebarState();
  }
  hideSidebar(){
    this.sidebarService.setSidebarState(true);
  }
}
