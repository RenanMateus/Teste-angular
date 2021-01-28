import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo3Component } from './modulo3/modulo3.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo3RoutingModule { }
