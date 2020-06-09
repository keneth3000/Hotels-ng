import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})

export class UsersComponent implements OnInit {
  claseDark = false;
  constructor(private _router:Router, private _authService: AuthService, private elementRef:ElementRef) { }

  ngOnInit(): void {

  }

  public todoGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  saveUser(data: IUser) {
    this._authService.saveUser(data)
      .subscribe((res) =>{
        this._router.navigate(['/signin'])
      });
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
