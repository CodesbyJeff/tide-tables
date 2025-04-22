import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Color, ScaleType, NgxChartsModule } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';
import { TideTimesComponent } from "../tide-times/tide-times.component";


@Component({
  selector: 'app-tide-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './tide-chart.component.html',
  styleUrl: './tide-chart.component.scss'
})

export class TideChartComponent {

  colorScheme: any = {
    domain: [
      // Degradê
      '#6FAEF1',
      '#66C3EF',
      '#5EE5FB',
      '#5EE5FB',
      // TENTATIVAS DE CORES
      // '#007C91',
      // '#73BBFB',
      // '#ffb300', // Laranja pôr do sol
      // '#32c8d9', // Azul piscina tropical (mar calmo)
      // '#ff7043', // Coral suave (pôr do sol na areia)
      // '#fdd835', // Amarelo sol vibrante
      // '#00c853', // Verde água (vegetação costeira)
      // '#f4e2d8', // Areia clara
      // '#a1887f',  // Areia molhada
      // '#d2b48c', // Areia molhada
    ]
  };

  tideTableToday: any = [

    { date: "2025-04-11", time: "03:00", type: "high", height: "2.02" },
    { date: "2025-04-11", time: "09:00", type: "low", height: "0.12" },
    { date: "2025-04-11", time: "15:00", type: "high", height: "2.2" },
    { date: "2025-04-11", time: "21:00", type: "low", height: "0.14" },

  ]


  tideData = [
    {
      name: 'Maré',
      series: [
        // { name: '00:00', value: 0.17 },
        { name: '03:00', value: 2.02 },
        // { name: '06:00', value: 1.2 },
        { name: '09:00', value: 0.12 },
        // { name: '12:00', value: 1.1 },
        { name: '15:00', value: 2.2 },
        // { name: '18:00', value: 1.3 },
        { name: '21:00', value: 0.14 },
        // { name: '23:59', value: 1.6 }
        // ...
      ]
    }
  ];

  // Tamanho do gráfico (largura x altura)
  // view: [number, number] = [1000, 500];
  // Se der erro de tipo, tente usar:  view: number[] = [700, 300];

  // showLegend = false;
  // showXAxis = true;
  // showYAxis = true;
  // autoScale = true;
  curve = shape.curveMonotoneX;
  // curve = 'curveNatural'; // ou 'curveBasis', etc.
}
