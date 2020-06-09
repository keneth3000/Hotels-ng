import { Component, ElementRef, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ModelHotelComponent } from 'src/app/shared/components/model-hotel/model-hotel.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
  public claseDark = false;
  constructor(public dialog: MatDialog, public authService:AuthService, private elementRef:ElementRef, public hotelService:HotelService){ }
  hotels: Hotel[] = [];

  ngOnInit():void{
     this.hotelService.getHotel()
      .subscribe((res:any) =>{
        this.hotels = res.data;
      });
  }

  title = 'Hoteles web';



  handleReservation(id) {
    this.hotels.filter((hotel, index) => {
      hotel._id === id && this.hotels.splice(index, 1);
    });
  }

  newUser(){
    this.openDialog();
  }

  openDialog():void{
    const diaglogRef = this.dialog.open(ModalComponent);
    diaglogRef.afterClosed();
  }

  openDialogHotel():void{
    const diaglogRef = this.dialog.open(ModelHotelComponent);
    diaglogRef.afterClosed();
  }

  getStorage():boolean{
    if(localStorage.getItem('dark-mode') === 'true'){
      this.elementRef.nativeElement.ownerDocument.body.classList.add('dark');
      return this.claseDark = true;
    }else{
      this.elementRef.nativeElement.ownerDocument.body.classList.remove('dark');
      return this.claseDark = false;
    }
  }
}
