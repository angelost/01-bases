import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

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
    nombre: '',
    poder: 0
  }

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
