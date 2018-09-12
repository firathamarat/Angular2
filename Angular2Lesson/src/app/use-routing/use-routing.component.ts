/*

  (ngModelChange) ve (change): Model üzerinde bir değişiklik gerçekleştiğinde calışan properties.

  Syntax: 

*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-routing',
  template: `
  <h1>Home Page</h1>
  <p>Anasayfa üzerinde bulunmaktasınız!</p>
  <input type="text" [(ngModel)] = "search" placeholder="Kelime Arayınız: " (ngModelChange)="State()">
  `,
  styles: []
})

export class UseRoutingComponent implements OnInit {

  //Modeli search olan textbox alanındaki durumu tutmak için değişken oluşturuldu ve default değer false atandı
  hasChange: Boolean = false;

  //Input box değeri değiştiğinde State fonksiyonu çalışması sağlandı ve hasCahange değişkenine "true" değeri atand
  State() {
    this.hasChange = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
