import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  imports: [],
  templateUrl: './models.component.html',
  styleUrl: './models.component.scss'
})

export interface TideEvent {
  date: string; // yyyy-MM-dd
  time: string; // HH:mm
  type: 'Alta' | 'Baixa';
  height: number; // em metros
}

export interface TideDay {
  date: string;
  tides: TideEvent[];
}

