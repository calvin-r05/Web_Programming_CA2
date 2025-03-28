import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICar } from '../../interfaces/car';
import { NewCar } from '../../interfaces/car';
import { CarComponent } from '../car/car.component';
import { CarApiService } from '../../services/car-api.service';

@Component({
  selector: 'app-carlist',
  imports: [CarComponent, CommonModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
public carsData:ICar | any;
public show: boolean = false;

constructor(private _carAPIService:CarApiService) {   }

ngOnInit() {
  this.getCars()
}

getCars() {
  this._carAPIService.getCarDetails().subscribe(carsData =>
    { this.carsData = carsData
  });
}

refreshCars() {
  this.getCars();
}

addCar(make:string, model:string, year:string,imageUrl:string):boolean {
  let addCar:ICar;
  addCar=new NewCar(make,model,year,imageUrl);
  this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
    { this.carsData = carsData}
  );
  
this.getCars()
  return false;
}

}
