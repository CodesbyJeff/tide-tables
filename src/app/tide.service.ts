import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TideService {

  constructor
    (
    //private http: HttpClient
  ) { }

  getTideData(): any {
    // return this.http.get('#api')
    return [
      { time: "02:00", height: 2.02 },
      { time: "09:00", height: 0.12 },
      { time: "15:00", height: 2.3 },
      { time: "21:00", height: 0.14 },
    ]
  }
}
