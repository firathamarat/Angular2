
/*

  app-demo-page Componenti içinde tanımladan Input değerini alabilmek için Input kütüphanesi tanımlanmalıdır
  ► import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  @Input('personData') personData;  ile input tanımlaması gerçekleştirildi

  ---

 @Output() Kullanımı:
  İlgili nesnenin (click)="" event özelliğine bir fonksiyon atandı
  Output ifadesini kullanabilmek için kütüphane olarak Output ve EventEmitter eklenmelidir

  EventEmitter: Dışarıdan bir eventın tetiklenmesini sağlamaktadır.
  ► import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  @Output tanımlaması gerçekleştirildi ve EventEmitter yaratıldı
  outputFunction fonksiyonun içinde ise servisle birlikte gelen bilgiler atandı

*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-demo-page',
  templateUrl: 'demo-page-component.html',
})

export class DemoPageComponent implements OnInit {

  //Input nesnesi tanımlandı
  @Input('personData') personData;

  //Output nesnesi tanımlandı ve EventEmitter yaratıldı (Dışarıya bi event tetikletildi)
  @Output('personView') personView = new EventEmitter();

  //Değişkenler TypeScript olarak declare edildi
  strName: String;
  strCompany: String;
  strAbout: String;

  constructor() {

  }

  ngOnInit() {

    //Default değerler atandı
    this.strName = this.personData.name;
    this.strCompany = this.personData.company;
    this.strAbout = this.personData.about;

  }

  //public türünde outputFunction fonksiyonu tanımlandı
  public outputFunction() {

    //Tanımlanan personView EventEmitter içine servisten çekilen bilgiler gönderildi
    this.personView.next(this.personData);

  }

}
