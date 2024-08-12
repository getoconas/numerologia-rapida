import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Compatibilidad } from '../../models/compatibilidad';
import { CompatibilidadService } from '../../services/compatibilidad.service';

@Component({
  selector: 'app-compatibilidad',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './compatibilidad.component.html',
  styleUrl: './compatibilidad.component.css'
})
export class CompatibilidadComponent {
  listadoCompatibilidades: Array<Compatibilidad>;
  txtFecha1: string = "";
  txtFecha2: string = "";
  numero1: number = 0;
  numero2: number = 0;
  mostrarFormulario: boolean;
  mostrarResultado: boolean;
  
  constructor(private compatibilidadService: CompatibilidadService) {
    this.mostrarFormulario = true;
    this.mostrarResultado = false;
    this.listadoCompatibilidades = this.compatibilidadService.obtenerListadoCompatibilidad();
  }

  obtenerCompatibilidad() {
    if (this.txtFecha1 == '' || this.txtFecha2 == '') {
      console.log('Error');
    } else {
      this.numero1 = this.obtenerNumero(this.txtFecha1);
      this.numero2 = this.obtenerNumero(this.txtFecha2);
      this.listadoCompatibilidades.forEach(element => {
        if (this.obtenerValidacion(element)) {
          console.log(element);
        }
      });
      //console.log('--- ' + this.numero1 + " --- " + this.numero2 + " ---");
    }
  }

  private obtenerValidacion(element: any) {
    return (
      (element.numero1 == this.numero1 && element.numero2 == this.numero2) ||
      (element.numero1 == this.numero2 && element.numero2 == this.numero1)
    );
  }

  // Retorna una sola cifra 
  private obtenerNumero(element: string) {
    let resultado = this.obtenerSuma(element);
    if (resultado == 11 || resultado == 22 || resultado == 33) {
      switch (resultado.toString()) {
        case '11':
          resultado = 2;
          break;
        case '22':
          resultado = 4;
          break;
        case '33':
          resultado = 6;
          break;
        default:
          resultado = 0
          break;
      }
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
        case '46':
          resultado = 1;
          console.log('1');
          break;
        case '20':
        case '29':
        case '38':
        case '47':
          resultado = 2;
          console.log('2');
          break;
        case '30':
        case '39':
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
