import { Component, Input, Output, ElementRef } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  claseDark = false;
  constructor(private elementRef: ElementRef) { }

  @Input() hotel: Hotel;
  @Output() handleMakeAReservation: EventEmitter<any> = new EventEmitter();

  makeAReservation() {
    this.handleMakeAReservation.emit(this.hotel._id);
  }

  getStorage(): boolean {
    if (localStorage.getItem('dark-mode') === 'true') {
      this.elementRef.nativeElement.ownerDocument.body.classList.add('dark');
      return this.claseDark = true;
    } else {
      this.elementRef.nativeElement.ownerDocument.body.classList.remove('dark');
      return this.claseDark = false;
    }

  }
}
