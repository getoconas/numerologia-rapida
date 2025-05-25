import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Compatibility } from '../../models/compatibility';
import { CompatibilityService } from '../../services/http/compatibility.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-compatibilidad',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './compatibilidad.component.html',
  styleUrl: './compatibilidad.component.css'
})
export class CompatibilidadComponent {
  listadoCompatibilidades: Array<Compatibility>;
  txtFecha1: string = "";
  txtFecha2: string = "";
  numero1: number = 0;
  numero2: number = 0;
  mostrarFormulario: boolean;
  mostrarResultado: boolean;
  
  constructor(private compatibilidadService: CompatibilityService, private helper: HelperService) {
    this.mostrarFormulario = true;
    this.mostrarResultado = false;
    this.listadoCompatibilidades = this.compatibilidadService.getCompatibility();
  }

  obtenerCompatibilidad() {
    if (this.txtFecha1 == '' || this.txtFecha2 == '') {
      console.log('Error');
    } else {
      this.numero1 = this.helper.getDigit(this.txtFecha1);
      this.numero2 = this.helper.getDigit(this.txtFecha2);
      this.listadoCompatibilidades.forEach(element => {
        if (this.getValidation(element)) {
          console.log(element);
        }
      });
    }
  }

  // Valida si los numeros son iguales
  private getValidation(element: any) : boolean {
    return (
      (element.number_first == this.numero1 && element.number_second == this.numero2) ||
      (element.number_first == this.numero2 && element.number_second == this.numero1)
    );
  }

  // Retorna una sola cifra 
  private obtenerNumero(element: string) {
    let result = this.getSum(element);
    if (result == 11 || result == 22 || result == 33) {
      switch (result.toString()) {
        case '11':
          result = 2;
          break;
        case '22':
          result = 4;
          break;
        case '33':
          result = 6;
          break;
        default:
          result = 0
          break;
      }
      console.log('Numero maestro: ' + result);
    } else if (result < 10) {
      console.log(result);
    } else {
      console.log(" --- " + result.toString() + " ---");
      switch (result.toString()) {
        case '10':
        case '19':
        case '28':
        case '37':
        case '46':
          result = 1;
          console.log('1');
          break;
        case '20':
        case '29':
        case '38':
        case '47':
          result = 2;
          console.log('2');
          break;
        case '30':
        case '39':
          result = 3;
          console.log('3');
          break;
        default:
          result = this.getSum(result.toString());
          console.log(result);
          break;        
      }
    }
    return result;
  }

  // Retorna la suma de los numeros ingresados
  private getSum(element: string) {
    let result = 0;
    for (let i = 0; i < element.length; i++) {
      if (!(element[i] == "-")) {
        result += parseInt(element[i]);
      }
    }
    return result;
  }
}
