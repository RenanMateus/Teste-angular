import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo1Component } from './modulo1/modulo1.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule { }
