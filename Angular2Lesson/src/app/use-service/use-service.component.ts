
//Kullanılan kütüphaneler import edildi
import { Component, OnInit } from '@angular/core';

//Create edilen servis, kullanılacak olan component'te import edildi
import { CreateServiceService } from '../create-service/create-service.service';


@Component({
  selector: 'app-use-service',
  templateUrl: "use-service-component.html",
  styles: []
})


export class UseServiceComponent implements OnInit {


  //Servisten gelen değerleri tutmak için insanlar adında dizi tanımlandı
  insanlar = [];


  //UseServiceComponent: CreateServiceService ile servis alındı
  constructor(UseServiceComponent: CreateServiceService) {

    //useService ile gelen değerleri insanlar dizisinin içine atandı
    this.insanlar = UseServiceComponent.People;

    //use-service-component.html dosyasında insanlar dizisi *ngFor ile teker teker döndürüldü

  }

  ngOnInit() {
  }

}
