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
  suma: number = 0;

  constructor() {
  }

  obtenerNumerologia() {
    this.suma = 0;
    for (let i = 0; i < this.txtFecha.length; i++) {
      if (!(this.txtFecha[i] == "-")) {
        this.suma += parseInt(this.txtFecha[i]);
      }
    }
    console.log(this.suma);
  }
}
