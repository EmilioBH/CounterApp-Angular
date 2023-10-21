import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(private appComponent: AppComponent, private router: Router) { }

  resetCounter(){
    this.appComponent.counter = 0
    this.appComponent.clickCounter = 0
    this.appComponent.X = 1
    this.router.navigate(['/reset'])
  }
}
