import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

 carName = '';
 addCarStatus = false;
 cars = ['Ford', 'Audi', 'BMW'];
 items = [{id: 3, name: 'item 3'},{id: 6, name: 'item 6'},{id: 9, name: 'item 9'}];

  constructor() {}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

 
}
