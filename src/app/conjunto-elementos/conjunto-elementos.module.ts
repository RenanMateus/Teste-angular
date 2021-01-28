import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ConjuntoElementosRoutingModule } from './conjunto-elementos-routing.module';
import { ConjuntoElementosComponent } from './conjunto-elementos/conjunto-elementos.component';


@NgModule({
  declarations: [ConjuntoElementosComponent],
  imports: [
    CommonModule,
    ConjuntoElementosRoutingModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ConjuntoElementosModule { }
