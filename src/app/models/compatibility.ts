export class Compatibility {
  id: number;
  number_first: number;
  number_second: number;
  description: string;
  
  constructor(id: number, number_first: number, number_second: number, description: string) {
    this.id = id;
    this.number_first = number_first;
    this.number_second = number_second;
    this.description = description;
  }
}
