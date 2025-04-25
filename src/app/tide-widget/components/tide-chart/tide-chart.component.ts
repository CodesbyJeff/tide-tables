import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, NgxChartsModule } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';
import { TideTimesComponent } from "../tide-times/tide-times.component";
import moment from 'moment';
import { TideService } from '../../../tide.service';


@Component({
  selector: 'app-tide-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './tide-chart.component.html',
  styleUrl: './tide-chart.component.scss'
})

export class TideChartComponent implements OnInit {

  today: any = moment().format("YYYY-MM-DD")

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

  ]


  tideData: any = [

  ];

  /**
   *
   */
  constructor(
    private tideService: TideService
  ) {

  }

  // Tamanho do gráfico (largura x altura)
  // view: [number, number] = [1000, 500];
  // Se der erro de tipo, tente usar:  view: number[] = [700, 300];

  // showLegend = false;
  // showXAxis = true;
  // showYAxis = true;
  // autoScale = true;
  curve = shape.curveMonotoneX;
  // curve = 'curveNatural'; // ou 'curveBasis', etc.

  ngOnInit(): void {
    this.setupPage()
  }
  setupPage() {
    this.getData();
  }

  getData() {
    let data = this.tideService.getTideData()
    this.tideTableToday = data || [];
    this.tideData = [
      {
        name: 'Maré',
        series: (data || []).map((it:any)=>{
          return {
            name:it.time,
            value:it.height
          }
        })
      }
    ]
  }

}
