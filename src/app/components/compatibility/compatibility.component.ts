import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Compatibility } from '../../models/compatibility';
import { CompatibilityService } from '../../services/http/compatibility.service';
import { HelperService } from '../../services/helper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compatibilidad',
  standalone: true,
  imports: [ RouterModule, FormsModule, CommonModule ],
  templateUrl: './compatibility.component.html',
  styleUrl: './compatibility.component.css'
})
export class CompatibilityComponent {
  compatibilityArray: Array<Compatibility>;
  textDate1: string = "";
  textDate2: string = "";
  first_number: number = 0;
  second_number: number = 0;
  viewResult: boolean;
  description: string = '';
  
  constructor(private compatibilityService: CompatibilityService, private helper: HelperService) {
    this.viewResult = false;
    this.compatibilityArray = this.compatibilityService.getCompatibility();
  }

  // Obtener compatibilidad de parejas
  public getCompatibility() {
    if (this.textDate1 == '' || this.textDate2 == '') {
      this.helper.showError('Debe ingresar una fecha');
    } else {
      this.first_number = this.helper.getDigit(this.textDate1);
      this.second_number = this.helper.getDigit(this.textDate2);
      this.compatibilityArray.forEach(element => {
        if (this.getValidation(element)) {
          this.viewResult = true;
          this.description = element.description;
          console.log(element);
        }
      });
    }
  }

  // Valida si los numeros son iguales
  private getValidation(element: any) : boolean {
    return (
      (element.number_first == this.first_number && element.number_second == this.second_number) ||
      (element.number_first == this.second_number && element.number_second == this.first_number)
    );
  }
}
