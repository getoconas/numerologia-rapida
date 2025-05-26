import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [ RouterModule, FormsModule ],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent {
  word: string = "";

  constructor() {
  }

  public getWord() {
    //console.log(this.word);
    for (let i = 0; i < this.word.length; i++) {
      const charCode = this.word.charCodeAt(i);
      console.log(`Character: ${this.word[i]}, ASCII Code: ${charCode}`);
    }
  }
}
