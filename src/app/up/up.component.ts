import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent {

  @Input() upButton: any

  constructor(private appComponent: AppComponent, private router: Router) { }

  increaseCounter(): void {
    this.appComponent.counter += this.appComponent.X
    this.router.navigate(['/up'])
  }
}
