import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  
@Component({
  selector: 'app-pipe-demo-page',
  templateUrl:'./pipe-demo-page.html'
})

export class PipeDemoPageComponent implements OnInit {

  //Input nesnesi tanımlandı
  @Input('personData') personData;

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



}
