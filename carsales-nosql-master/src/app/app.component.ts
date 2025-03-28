import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarlistComponent } from './components/carlist/carlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarlistComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carsales-nosql';
}
