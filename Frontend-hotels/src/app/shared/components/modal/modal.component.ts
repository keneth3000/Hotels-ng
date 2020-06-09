import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  claseDark = false;
  constructor(public dialg: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data) { }
}
