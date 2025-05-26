import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private letterToNumber: { [key: string]: number } = {
    'a': 1, 'j': 1, 's': 1,
    'b': 2, 'k': 2, 't': 2,
    'c': 3, 'l': 3, 'u': 3,
    'd': 4, 'm': 4, 'v': 4,
    'e': 5, 'n': 5, 'ñ': 5, 'w': 5,
    'f': 6, 'o': 6, 'x': 6,
    'g': 7, 'p': 7, 'y': 7,
    'h': 8, 'q': 8, 'z': 8,
    'i': 9, 'r': 9
  }

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

  // Retorna el numero correspondiente a una letra
  public getNumberFromLetter(letter: string) : number {
    const lowerLetter = letter.toLowerCase();
    return this.letterToNumber[lowerLetter] || 0; // Retorna 0 si la letra no está en el mapa
  }

  // Muestra un mensaje de error
  public showError(message: string) : void {
    this.toastr.error('', message);
  }
}
