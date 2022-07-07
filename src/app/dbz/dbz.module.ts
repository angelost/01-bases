import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPaigeComponent } from './main-paige/main-paige.component';



@NgModule({
  declarations: [
    MainPaigeComponent
  ],
  exports: [
    MainPaigeComponent
],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
