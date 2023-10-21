import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpComponent } from './up/up.component';
import { DownComponent } from './down/down.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {path: '', redirectTo: '/up', pathMatch: 'full'},
  { path: 'up', component: UpComponent },
  { path: 'down', component: DownComponent },
  { path: 'reset', component: ResetComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
