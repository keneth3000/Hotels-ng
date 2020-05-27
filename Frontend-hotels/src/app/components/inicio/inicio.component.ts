import { Component } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent{

  constructor(public dialog: MatDialog, public authService:AuthService){ }

  title = 'Hoteles web';

  hotels: Hotel[] = [
    new Hotel('Solei', 'Un gran hotel', 1500, '1', undefined, ['psicina']),
    new Hotel('Barcenas', 'Hotel con una gran psicina', 2000, '2', undefined, ['pequeño', 'antigua']),
    new Hotel('Hilton', 'Un hotel muy bueno', 2500, '3', undefined, ['psicina', 'grande']),
  ];

  handleReservation(id) {

    this.hotels.filter((hotel, index) => {
      hotel.id === id && this.hotels.splice(index, 1);
    });

  }

  openDialog():void{
    const diaglogRef = this.dialog.open(ModalComponent);
    diaglogRef.afterClosed();
  }
}
