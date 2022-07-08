import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPaigeComponent } from './main-paige/main-paige.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';




@NgModule({
  declarations: [
    MainPaigeComponent,
    PersonajesComponent,
    AgregarComponent
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
