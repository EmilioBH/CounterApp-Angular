import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const storedCounter = localStorage.getItem('counter')
    const storedX = localStorage.getItem('X')
    const soredClickCounter = localStorage.getItem('clickCounter')

    if(storedCounter) {
      this.counter = parseInt(storedCounter, 10)
      this.updateBackgroundColor()
    }

    if(storedX) {
      this.X = parseInt(storedX, 10)
    }

    if(soredClickCounter) {
      this.clickCounter = parseInt(soredClickCounter, 10)
    }
  }

  public title = 'CounterApp';
  public counter: number = 0
  public X: number = 1
  public clickCounter: number = 0

  increaseCounter() {
    this.updateBackgroundColor()
    this.clickCounter++;
  
    if (this.clickCounter % 30 === 0) {
      this.X *= 2;
    }

    localStorage.setItem('counter', this.counter.toString())
    localStorage.setItem('X', this.X.toString())
    localStorage.setItem('clickCounter', this.clickCounter.toString())
  }

  updateBackgroundColor() {
    if (this.counter >= 10) {
      document.body.style.backgroundColor = '#e74c3c';
    } else if (this.counter <= -10) {
      document.body.style.backgroundColor = '#27ae60';
    } else {
      document.body.style.backgroundColor = '';
    }
  
  }
}
