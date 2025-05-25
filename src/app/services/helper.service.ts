import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toastr: ToastrService) { }

  // Retorna un digito
  public getDigit(element: string) : number {
    let result = this.getAddDigits(element);
    if (result >= 0) {
      while (result >= 10) {
        result = this.addDigits(result);
      }
    }
    return result;
  }

  // Retorna la suma de digitos de una fecha ingresada
  private getAddDigits(element: string) : number {
    let result = 0;
    for (let i = 0; i < element.length; i++) {
      if (!(element[i] == '-')) {
        result += parseInt(element[i]);
      }
    }
    return result;
  }

  // Retorna la suma de un digito para un numero de mas de dos cifras
  private addDigits(number: number) : number {
    let result = 0;
    while (number) {
      result += number % 10;
      number = Math.floor(number / 10);
    }
    return result;
  }

  // Muestra un mensaje de error
  public showError(message: string) : void {
    this.toastr.error('', message);
  }
}
