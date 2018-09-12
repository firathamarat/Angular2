import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  template: `
   <h1>Latest News</h1>
   <p>Bu Component üzerinde yeni haberler yer almaktadır.</p>
  `,
  styles: []
})
export class NewsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
