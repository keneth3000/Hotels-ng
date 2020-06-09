import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

userData:[] = [];
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private URL = "http://localhost:3000/user";

  constructor(private _router: Router, private http: HttpClient) { }

  signin(user: IUser) {
    return this.http.post(`${this.URL}/signin`, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/signin']);
  }

   saveUser(user:IUser){
    return this.http.post(`${this.URL}`, user);
  }
}
