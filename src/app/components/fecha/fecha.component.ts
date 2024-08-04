import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.css'
})
export class FechaComponent {
  txtFecha: string = "";
  resultado: number = 0;

  constructor() {
  }

  obtenerNumerologia() {
    this.resultado = this.obtenerSuma(this.txtFecha);
    if (this.resultado == 11 || this.resultado == 22 || this.resultado == 33) {
      console.log('Numero maestro: ' + this.resultado);
    } else if (this.resultado < 10) {
      console.log(this.resultado);
    } else {
      console.log(" --- " + this.resultado.toString() + " ---");
      switch (this.resultado.toString()) {
        case '10':
        case '19':
        case '28':
          console.log('1');
          break;
        case '20':
          console.log('2');
          break;
        case '30':
          console.log('3');
          break;
        default:
          this.resultado = this.obtenerSuma(this.resultado.toString());
          console.log(this.resultado);
          break;        
      } 
    }
  }

  // Retorna la suma de los numeros ingresados
  private obtenerSuma(element: string) {
    let suma = 0;
    for (let i = 0; i < element.length; i++) {
      if (!(element[i] == "-")) {
        suma += parseInt(element[i]);
      }
    }
    return suma;
  }
}
