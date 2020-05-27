import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router:Router, private auth:AuthService){}

  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true;
    }
    this._router.navigate(['/']);
    return false;
  }

}
