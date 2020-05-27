import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private URL = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  public saveUser(user:IUser){
    return this.http.post(`${this.URL}`, user);
  }

  public updateUser(){

  }

  public deleteUser(){
    return this.http.delete(`${this.URL}`);
  }
}
