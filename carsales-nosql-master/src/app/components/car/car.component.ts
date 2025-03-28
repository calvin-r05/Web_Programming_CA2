import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
@Input() carData?:ICar;
@Output() carDeletedEvent = new EventEmitter<string>()
public carImageWidth:number = 300;
constructor (private _carAPIService:CarApiService) {  }
deleteCar(carId:string ) { 
  this._carAPIService.delCarDetails(carId).subscribe(result =>
    { 
      console.log(result);
      
    });
    this.carDeletedEvent.emit("Car got deleted");
}
}
