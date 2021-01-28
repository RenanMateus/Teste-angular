import { Component, OnInit } from '@angular/core';

import { ConjuntoElemento } from '../../classes/conjunto-elementos';

@Component({
  selector: 'app-conjunto-elementos',
  templateUrl: './conjunto-elementos.component.html',
  styleUrls: ['./conjunto-elementos.component.css']
})
export class ConjuntoElementosComponent implements OnInit {
  conjunto: ConjuntoElemento = new ConjuntoElemento();
  vetorQtdNumeros = new Array();
  entradas = new Array();

  constructor() { }

  ngOnInit(): void {
  }


  preenherVetor() {
    this.vetorQtdNumeros = Array(this.conjunto.qtdNumeros).fill(0).map((x, i) => i);
    console.log('vetor', this.vetorQtdNumeros);
  }

  ordenacao() {
    this.entradas = new Array();
    this.conjunto.entradas.map(element => {
      this.entradas.push(element);
    });
    this.entradas.sort((a, b) => {
      return a - b;
    });
  }

  mostrarSaida() {
    let vetorSemRepetir = this.entradas.filter((element, i) => this.entradas.indexOf(element) === i);
    return vetorSemRepetir.map(element => {
      return element;
    });
  }

  limparTudo() {
    this.conjunto = new ConjuntoElemento();
    this.vetorQtdNumeros = new Array();
    this.entradas = new Array();
  }
}
