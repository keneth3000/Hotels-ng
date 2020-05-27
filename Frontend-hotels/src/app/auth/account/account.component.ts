import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public currentImage

  constructor() {}

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    photoURL: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  onSaveUser(data){

  }

  handleImage(){

  }

}
