import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { OperacaoBinarioRoutingModule } from './operacao-binario-routing.module';
import { OperacaoBinarioComponent } from './operacao-binario/operacao-binario.component';


@NgModule({
  declarations: [OperacaoBinarioComponent],
  imports: [
    CommonModule,
    OperacaoBinarioRoutingModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class OperacaoBinarioModule { }
