import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacaoBinarioComponent } from './operacao-binario/operacao-binario.component';

const routes: Routes = [
  {
    path: '',
    component: OperacaoBinarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacaoBinarioRoutingModule { }
