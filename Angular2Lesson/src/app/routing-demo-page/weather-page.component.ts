import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-page',
  template: `
  <h1>Weather Forecast</h1>
  <p>Bu Component üzerinde hava durumu tahminleri yer almaktadır.</p>
  `,
  styles: []
})
export class WeatherPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
