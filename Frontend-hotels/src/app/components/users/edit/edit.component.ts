import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';
import { SidebarService } from '../../../shared/components/sidebar/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input()user: IUser

  info:IUser[] =[];

  editForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private sidebarService:SidebarService, private _router:Router) { }

  ngOnInit(): void {
    this.sidebarService.getUser()
      .subscribe((res:any)=>{
        this.info.push(res);
      });
    this.initForm();
  }

  initForm():void{
    this.editForm.patchValue({
      _id: this.user._id,
      name: this.user.name,
      lastName: this.user.lastName,
      email: this.user.email
    })
  }

  editCredential(user:IUser, id:string){
    this.sidebarService.editUser(user, id)
      .subscribe((res) => {
        location.reload();
      });
  }

}
