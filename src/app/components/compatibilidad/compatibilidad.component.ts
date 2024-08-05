import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-compatibilidad',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './compatibilidad.component.html',
  styleUrl: './compatibilidad.component.css'
})
export class CompatibilidadComponent {
  txtFecha1: string = "";
  txtFecha2: string = "";
  resultado1: number = 0;
  resultado2: number = 0;
  
  constructor() {

  }

  obtenerCompatibilidad() {
    this.resultado1 = this.obtenerNumero(this.txtFecha1);
    this.resultado2 = this.obtenerNumero(this.txtFecha2);
    console.log('--- ' + this.resultado1 + " --- " + this.resultado2 + " ---");
  }

  private obtenerNumero(element: string) {
    let resultado = this.obtenerSuma(element);
    if (resultado == 11 || resultado == 22 || resultado == 33) {
      console.log('Numero maestro: ' + resultado);
    } else if (resultado < 10) {
      console.log(resultado);
    } else {
      console.log(" --- " + resultado.toString() + " ---");
      switch (resultado.toString()) {
        case '10':
        case '19':
        case '28':
        case '37':
          resultado = 1;
          console.log('1');
          break;
        case '20':
          resultado = 2;
          console.log('2');
          break;
        case '30':
          resultado = 3;
          console.log('3');
          break;
        default:
          resultado = this.obtenerSuma(resultado.toString());
          console.log(resultado);
          break;        
      }
    }
    return resultado;
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
