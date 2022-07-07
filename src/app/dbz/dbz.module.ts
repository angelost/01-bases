import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPaigeComponent } from './main-paige/main-paige.component';




@NgModule({
  declarations: [
    MainPaigeComponent
  ],
  exports: [
    MainPaigeComponent
],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class DbzModule { }
