import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-palabra',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './palabra.component.html',
  styleUrl: './palabra.component.css'
})
export class PalabraComponent {
  txtPalabra: string = "";

  constructor() {
  }

  obtenerPalabra() {
    console.log(this.txtPalabra);
  }
}
