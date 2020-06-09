import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-model-edit-user',
  templateUrl: './model-edit-user.component.html',
  styleUrls: ['./model-edit-user.component.scss']
})
export class ModelEditUserComponent implements OnInit {

  constructor(public dialg:MatDialogRef<ModelEditUserComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}
