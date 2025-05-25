import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Compatibilidad } from '../../models/compatibilidad';
import { HelperService } from '../../services/helper.service';
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
  
  constructor(private helper: HelperService, private compatibilidadService: CompatibilidadService) {
    this.mostrarFormulario = true;
    this.mostrarResultado = false;
    this.listadoCompatibilidades = this.compatibilidadService.obtenerListadoCompatibilidad();
  }

  obtenerCompatibilidad() {
    if (this.txtFecha1 == '' || this.txtFecha2 == '') {
      console.log('Error');
    } else {
      this.numero1 = this.helper.obtenerDigito(this.txtFecha1);
      this.numero2 = this.helper.obtenerDigito(this.txtFecha2);
      this.listadoCompatibilidades.forEach(element => {
        if (this.obtenerValidacion(element)) {
          console.log(element);
        }
      });
    }
  }

  private obtenerValidacion(element: any) {
    return (
      (element.numero1 == this.numero1 && element.numero2 == this.numero2) ||
      (element.numero1 == this.numero2 && element.numero2 == this.numero1)
    );
  }
}
