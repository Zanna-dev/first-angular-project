import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../componenets/greeting/greeting.component';
import { CounterComponent } from '../componenets/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   homeMessage = signal('Hello, world');

   keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`)
   }
}
