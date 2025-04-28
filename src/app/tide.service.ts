import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import $ from 'jquery'

@Injectable({
  providedIn: 'root'
})
export class TideService {

  constructor
    (

  ) { }

  getTideData(date) {
    return new Promise(resolve => {
      $.ajax({
        url: 'https://us-central1-cfap-app.cloudfunctions.net/api_sisbom/ws/tide_table/' + date,
        dataType: 'json'
      }).done((data) => resolve(data || []));
    })
  }
}