import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  URL = 'http://localhost:3000/user';

  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Editar credenciales',
      active: false,
      type: 'edit',
      icon: 'edit'
    },
    {
      title: 'Eliminar cuenta',
      icon: 'delete',
      active: false,
      type: 'delete'
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Ver hoteles',
      active: false,
      icon: 'apartment',
      type: 'simple',
    },
    {
      title: 'Reservaciones',
      icon: 'event',
      active: false,
      type: 'simple'
    },
  ];

  menusHotels = [
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Editar información',
      active: false,
      type: 'edit',
      icon: 'edit'
    },
    {
      title: 'Eliminar',
      icon: 'delete',
      active: false,
      type: 'delete'
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Ver Reportes',
      active: false,
      icon: 'report',
      type: 'simple',
    },
    {
      title: 'Reservaciones',
      icon: 'event',
      active: false,
      type: 'simple'
    },
  ];
  constructor(private http: HttpClient) { }

  toggle(){
    this.toggled = ! this.toggled;
  }

  getSidebarState(){
    return this.toggled;
  }

  setSidebarState(state: boolean){
    this.toggled = state;
  }

  getMenuList(){
    return this.menus;
  }

  getMenuListHotel(){
    return this.menusHotels
  }

  get hasBackgroundImage(){
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage){
    this._hasBackgroundImage = hasBackgroundImage;
  }

  getUser(){
    return this.http.get(`${this.URL}/profile`)
      .pipe(map((res:any)=>{
        return res.data
      }));
  }

  deleteUser(id:string){
    return this.http.delete(this.URL);
  }

  editUser(user:IUser, id:string){
    return this.http.put(this.URL, user);
  }
}
