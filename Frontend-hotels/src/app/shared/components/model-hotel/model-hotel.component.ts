import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-model-hotel',
  templateUrl: './model-hotel.component.html',
  styleUrls: ['./model-hotel.component.scss']
})
export class ModelHotelComponent implements OnInit {

  constructor(public dialg: MatDialogRef<ModelHotelComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}
