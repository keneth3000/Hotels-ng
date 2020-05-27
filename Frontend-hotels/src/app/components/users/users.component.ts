import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { IUser } from 'src/app/models/user.model';
import { HotelService } from '../../services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})

export class UsersComponent implements OnInit {

  constructor(private _router:Router, private _serviceHotel: HotelService) { }

  ngOnInit(): void {

  }

  public todoGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  saveUser(data: IUser) {
    this._serviceHotel.saveUser(data)
      .subscribe((res) =>{
        this._router.navigate(['/signin'])
      });
  }

}
