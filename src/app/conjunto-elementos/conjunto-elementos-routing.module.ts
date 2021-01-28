import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConjuntoElementosComponent } from './conjunto-elementos/conjunto-elementos.component';

const routes: Routes = [
  {
    path: '',
    component: ConjuntoElementosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConjuntoElementosRoutingModule { }
