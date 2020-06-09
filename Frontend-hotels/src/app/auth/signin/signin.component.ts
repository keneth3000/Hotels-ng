import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  public user:IUser[] = [];

  public authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  credentendials(data:IUser){
    this.auth.signin(data)
      .subscribe((res:any) => {
        if(localStorage.getItem('token')){
          localStorage.removeItem('token');
        }
        localStorage.setItem('token', res.data);
        this._router.navigate(['/']);
      })
  }
}
