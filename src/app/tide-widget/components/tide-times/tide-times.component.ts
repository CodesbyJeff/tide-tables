import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tide-times',
  imports: [CommonModule],
  templateUrl: './tide-times.component.html',
  styleUrl: './tide-times.component.scss'
})
export class TideTimesComponent {
next3Days: any = [
  {date: "2025-04-11", tides: [
    {time: "00:00", type: "low", height: "0.2"},
    {time: "00:00", type: "low", height: "0.2"},
    {time: "00:00", type: "low", height: "0.2"},
    {time: "00:00", type: "low", height: "0.2"},
  ]},

  {date: "2025-04-12", tides: [
    {time: "00:00", type: "low", height: "0.2"},
    {time: "00:00", type: "low", height: "0.2"},
    {time: "00:00", type: "low", height: "0.2"},
    {time: "00:00", type: "low", height: "0.2"},
  ]}
]

}
