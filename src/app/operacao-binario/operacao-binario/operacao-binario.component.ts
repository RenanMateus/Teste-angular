import { Component, OnInit } from '@angular/core';

import { OperacaoBinario } from '../../classes/operacao-binario';
import { TipoOperacao } from '../../enumeradores/tipo-operacao.enum';

@Component({
  selector: 'app-operacao-binario',
  templateUrl: './operacao-binario.component.html',
  styleUrls: ['./operacao-binario.component.css']
})
export class OperacaoBinarioComponent implements OnInit {
  operacao: OperacaoBinario = new OperacaoBinario();
  podeRealizar = true;

  constructor() { }

  ngOnInit(): void {
  }


  nomeBotao(operacao) {
    return (operacao == 1 ? 'Somar' : operacao == 2 ? 'Subtrair' : operacao == 3 ? 'Multiplicar' : operacao == 4 ? 'Dividir' : operacao == 5 ? 'Resto da Divisão' : 'Realizar Operação');
  }

  verificarOperacao() {
    const decimal1 = parseInt(this.operacao.valor1, 2);
    const decimal2 = parseInt(this.operacao.valor2, 2);
    if (decimal2 > 0) {
      if (this.operacao.valor2.length < 8) {
        this.operacao.valor2 = this.operacao.valor2.padStart(8, '0');
      }
      if (this.operacao.tipoOperacao == TipoOperacao.Subtracao || this.operacao.tipoOperacao == TipoOperacao.Divisão) {
        this.podeRealizar = (decimal1 >= decimal2);

      } else {
        this.podeRealizar = true;
      }
    }
  }

  realizarOperacao() {
    const decimal1 = parseInt(this.operacao.valor1, 2);
    const decimal2 = parseInt(this.operacao.valor2, 2);
    let resultado = 0;
    console.log(decimal1, decimal2);

    if (this.operacao.tipoOperacao == TipoOperacao.Soma) {
      resultado = decimal1 + decimal2;

    } else if (this.operacao.tipoOperacao == TipoOperacao.Subtracao) {
      resultado = decimal1 - decimal2;

    } else if (this.operacao.tipoOperacao == TipoOperacao.Multiplicacao) {
      resultado = decimal1 * decimal2;

    } else if (this.operacao.tipoOperacao == TipoOperacao.Divisão) {
      resultado = decimal1 / decimal2;

    } else if (this.operacao.tipoOperacao == TipoOperacao.Resto) {
      resultado = decimal1 % decimal2;
    }
    this.operacao.resultado = resultado.toString(2);
    console.log('resultado', resultado);
  }

  limparCampos() {
    this.operacao = new OperacaoBinario();
  }

}
