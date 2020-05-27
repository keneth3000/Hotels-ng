import { Component, OnInit, Input, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent{
  @Input() hotel:Hotel;
  @Output() handleMakeAReservation: EventEmitter<any> = new EventEmitter();

  makeAReservation(){
    this.handleMakeAReservation.emit(this.hotel.id);
  }

}
