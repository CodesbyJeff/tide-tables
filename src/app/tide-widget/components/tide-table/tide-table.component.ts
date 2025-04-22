import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tide-table',
  imports: [CommonModule],
  templateUrl: './tide-table.component.html',
  styleUrl: './tide-table.component.scss'
})
export class TideTableComponent {
  tideTable: any = [

    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
    { date: "2025-04-11", time: "00:00", type: "low", height: "0.2" },
  ]
}
