import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private URL = "http://localhost:3000/hotel"

  constructor(private http: HttpClient) { }

  getHotel(){
    return this.http.get(this.URL);
  }

  addHotel(hotel:Hotel){
    return this.http.post(this.URL, hotel);
  }
}
