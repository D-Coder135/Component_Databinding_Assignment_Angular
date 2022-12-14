import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(lastFiredNumber: number) {
    if (lastFiredNumber % 2 == 0) {
      this.evenNumbers.push(lastFiredNumber);
    } else {
      this.oddNumbers.push(lastFiredNumber);
    }
  }
}
