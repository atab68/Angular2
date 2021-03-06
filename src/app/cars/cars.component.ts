import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

 carName = '';
 addCarStatus = false;
 cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Toyota'];
 dates = [
  new Date(2015, 3, 4).toDateString(),
  new Date(2015, 2, 5).toDateString(),
  new Date(2015, 4, 6).toDateString(),
  new Date(2015, 1, 7).toDateString()
 ];
   
 

  constructor() {}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

 
}
