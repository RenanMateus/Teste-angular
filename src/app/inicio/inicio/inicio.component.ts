import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import Chart from 'chart.js';
import { TabelaDemo } from '../../interfaces/tabela-inicio.interface';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @ViewChild('myChart', { static: false }) grafico: ElementRef;
  @ViewChild('myChart2', { static: false }) grafico2: ElementRef;

  displayedColumns: string[] = ['nome', 'idade', 'altura', 'peso'];
  dataSource: TabelaDemo[] = [
    {
      nome: 'Renan Mateus Pacífico Coelho',
      altura: 1.76,
      peso: 78.6,
      idade: 24
    },
    {
      nome: 'Melissa Nina Jesus',
      altura: 1.65,
      peso: 61,
      idade: 21
    },
    {
      nome: 'Edson Cláudio Caio Barbosa',
      altura: 1.96,
      peso: 73,
      idade: 23
    },
    {
      nome: 'Anthony Kaique da Silva',
      altura: 1.97,
      peso: 55,
      idade: 35
    },
    {
      nome: 'Ryan Victor Sérgio de Paula',
      altura: 1.82,
      peso: 73.2,
      idade: 45
    },
    {
      nome: 'Stefany Carla Larissa Pinto',
      altura: 1.70,
      peso: 68,
      idade: 31
    }
  ];

  constructor() {
    setTimeout(() => {
      this.montarGrafico();
    }, 300);
  }

  ngOnInit(): void {
  }


  montarGrafico() {
    var myChart = new Chart(this.grafico.nativeElement, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Demo',
          data: [50, 190, 150, 58, 210, 88],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });

    var myChart2 = new Chart(this.grafico2.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Demo',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

}
