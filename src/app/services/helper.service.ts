import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  // Retorna un digito
  public obtenerDigito(element: string): number {
    let suma = this.obtenerSumaDeDigitos(element);
    if (suma >= 0) {
      while (suma >= 10) {
        suma = this.sumarDigitos(suma);
      }
    }
    return suma;
  }

  // Retorna la suma de digitos de una fecha ingresada
  private obtenerSumaDeDigitos(element: string): number {
    let suma = 0;
    for (let i = 0; i < element.length; i++) {
      if (!(element[i] == '-')) {
        suma += parseInt(element[i]);
      }
    }
    return suma;
  }

  // Retorna la suma de un digito para un numero de mas de dos cifras
  private sumarDigitos(numero: number): number {
    let suma = 0;
    while (numero) {
      suma += numero % 10;
      numero = Math.floor(numero / 10);
    }
    return suma;
  }
}
