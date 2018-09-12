
/*
  create-service ile yaratılan servisi kullanabilmek için;
  ► import { CreateServiceService } from '../create-service/create-service.service'; import edilmelidir

  constructor metodunun içine UseInputComponent: CreateServiceService oluşturulan servis tanımlanmalıdır
  ► constructor(UseInputComponent: CreateServiceService) {} 


  @Input() ile Data Gönderme : Burada amaç tanımlanan bir directive’e parametre gönderebilmektir

  Servisten gelen değerle birlikte tekrarlanacak Component'te *ngFor='let insan of this.insanlar' ile bir servisten dönen değer kadar <app-demo-page> component döndürüldü. ngFor ile dönen her directive Input değeri verilerek bilgiler nesnelerde gösterildi. 

  Input : [personData] ="insan" şeklinde tanımlandı


  //---


  @Output() ile Data Alma : Amaç directive üzerinden parametre ile gönderilmiş datayı almaktadır.

  (personView) ="viewFunction($event) şeklinde tanımlandı.
  (personView) fonksiyonu tetiklendiğinde viewFunction($event) fonksiyonu tetiklenmektedir.
*/

import { Component, OnInit } from '@angular/core';

//Oluşturulan servis component'e import edildi
import { CreateServiceService } from '../create-service/create-service.service';


@Component({

  selector: 'app-use-input',
  template: `
  <app-demo-page *ngFor='let insan of this.insanlar' [personData] ="insan" (personView) ="viewFunction($event)"></app-demo-page>
  `,
  styleUrls: ['./use-input-output.component.css']
})


export class UseInputOutputComponent implements OnInit {

  //Servisten gelen değerleri tutmak için insanlar adında dizi oluşturuldu
  insanlar = [];

  constructor(UseInputOutputComponent: CreateServiceService) {

    //useService ile gelen değerleri insanlar dizisinin içine atandı
    this.insanlar = UseInputOutputComponent.People;

  }

  ngOnInit() {
  }

  viewFunction($event) {

    //$event ile birlikte gelen değerler ekrana Alert mesajı ile gösterildi ve log ile bilgi verildi
    alert(`Name: ${$event.name} Company: ${$event.company} About: ${$event.about}`);

    console.log(`Name: ${$event.name} Company: ${$event.company} About: ${$event.about}`);

  }

}
