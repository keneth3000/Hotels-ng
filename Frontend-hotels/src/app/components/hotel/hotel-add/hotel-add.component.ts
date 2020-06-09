import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.scss']
})
export class HotelAddComponent implements OnInit {

  todoGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    availability: new FormControl('', Validators.required)
  });

  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
  }

  saveHotel(hotel:Hotel){
    this.hotelService.addHotel(hotel)
      .subscribe(res => console.log(res));
  }

}
