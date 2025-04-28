import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TideWidgetComponent } from "./tide-widget/tide-widget.component";
import { HttpClientModule } from '@angular/common/http';
import { TideService } from './tide.service';

@Component({
  selector: 'app-root',
  imports: [TideWidgetComponent, HttpClientModule],
  templateUrl: './app.component.html',
  providers: [TideService],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tide-tables';
}

// imports: [RouterOutlet, TideWidgetComponent],