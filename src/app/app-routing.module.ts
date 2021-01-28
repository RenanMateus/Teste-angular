import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'conjunto-elementos',
    loadChildren: () => import('./conjunto-elementos/conjunto-elementos.module').then(m => m.ConjuntoElementosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'operacoes-binario',
    loadChildren: () => import('./operacao-binario/operacao-binario.module').then(m => m.OperacaoBinarioModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'modulo1',
    loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'modulo2',
    loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2Module),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'modulo3',
    loadChildren: () => import('./modulo3/modulo3.module').then(m => m.Modulo3Module),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
