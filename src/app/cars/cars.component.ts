import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

 addCarStatus = '';
  inputText = 'Default text';

  constructor() {}

  addCar() {
    this.addCarStatus = "Car was added!"
  }

  onKeyUp(event) {
    //console.log(event);
    if (event.code === 'Enter') 
      this.inputText = event.target.value;
    
  }

}
