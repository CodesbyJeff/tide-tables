import { Component } from '@angular/core';
import { TideChartComponent } from './components/tide-chart/tide-chart.component';
import { TideTimesComponent } from './components/tide-times/tide-times.component';
import { TideTableComponent } from './components/tide-table/tide-table.component';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-tide-widget',
  imports: [TideChartComponent, CommonModule, NgxChartsModule],
  templateUrl: './tide-widget.component.html',
  styleUrl: './tide-widget.component.scss'
})
export class TideWidgetComponent {

}
