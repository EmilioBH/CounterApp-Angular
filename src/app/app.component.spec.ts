import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DownComponent } from './down/down.component';
import { UpComponent } from './up/up.component';
import { ResetComponent } from './reset/reset.component';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DownComponent, UpComponent, ResetComponent],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });

  it('should have a title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('CounterApp');
  });

  it('should initialize the counter', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.counter).toBe(0);
  });

  it('should initialize X', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.X).toBe(1);
  });

  it('should initialize clickCounter', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.clickCounter).toBe(0);
  });

  it('should increase the counter and update background color', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    const initialCounter = app.counter;
    app.increaseCounter();
    expect(app.counter).toBe(initialCounter + app.X);
    // Add expectations for background color change
  });

  it('should double X every 30 actions', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    const initialX = app.X;
    for (let i = 1; i <= 30; i++) {
      app.increaseCounter();
    }
    expect(app.X).toBe(initialX * 2);
  });
});