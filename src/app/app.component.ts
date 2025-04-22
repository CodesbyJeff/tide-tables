import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TideWidgetComponent } from "./tide-widget/tide-widget.component";

@Component({
  selector: 'app-root',
  imports: [TideWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tide-tables';
}

// imports: [RouterOutlet, TideWidgetComponent],