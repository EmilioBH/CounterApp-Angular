import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.css']
})
export class DownComponent {

  @Input() downButton: any

  constructor(private appComponent: AppComponent, private router: Router) {}

  decreaseCounter(): void {
    this.appComponent.counter -= this.appComponent.X
    this.router.navigate(['/down'])
  }
}
