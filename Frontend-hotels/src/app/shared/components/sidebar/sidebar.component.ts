import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { IUser } from '../../../models/user.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModelEditUserComponent } from '../model-edit-user/model-edit-user.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  user:IUser[] = [];
  menus = [];
  constructor(public sidenavService: SidebarService, private _router:Router, public dialog:MatDialog) {
    this.menus = sidenavService.getMenuList();
  }

  ngOnInit(): void {
    this.sidenavService.getUser()
      .subscribe((res:any) => {
        this.user.push(res);
      },(err)=>{
        console.log(err);
        throw err;
      })
  }

  getSideBarState() {
    return this.sidenavService.getSidebarState();
  }

  getState(currentMenu) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidenavService.hasBackgroundImage;
  }

  deleteUser(id:string){
    this.sidenavService.deleteUser(id)
      .subscribe((res)=>{
        localStorage.removeItem('token');
        this._router.navigate(['/']);
      }, (err:HttpErrorResponse)=>{
          if(err.status === 400){
             console.log("Este error", err.error.message, " Debes crear un usuario");
             this._router.navigate(['/'])
          }
      })
  }

  editUser(user:IUser){
    this.openDialog(user)
  }

  openDialog(user:IUser):void{
    const config = {
      data: {
        content: user
      }

    }
    const dialogRef = this.dialog.open(ModelEditUserComponent, config);
    dialogRef.afterClosed();
  }
}
