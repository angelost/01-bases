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

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar() {
    console.log(this.nuevo);
  }

}
