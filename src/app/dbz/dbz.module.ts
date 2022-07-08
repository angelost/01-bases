import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPaigeComponent } from './main-paige/main-paige.component';
import { PersonajesComponent } from './personajes/personajes.component';




@NgModule({
  declarations: [
    MainPaigeComponent,
    PersonajesComponent
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
