import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-paige',
  templateUrl: './main-paige.component.html'
})
export class MainPaigeComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

}
