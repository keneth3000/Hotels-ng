import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MATERIAL
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const myModule = [
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports: [
    myModule
  ]
})
export class MaterialModule { }
