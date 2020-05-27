import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
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
      icon: 'edit'
    },
    {
      title: 'Eliminar cuenta',
      icon: 'delete',
      active: false
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
  constructor() { }

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

  get hasBackgroundImage(){
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage){
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
