import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from '../create-service/create-service.service';

@Component({
  selector: 'app-use-pipe',
  template: `

  <app-pipe-demo-page *ngFor='let insan of this.insanlar' [personData] ="insan"></app-pipe-demo-page>

  `
})

export class UsePipeComponent  implements OnInit {

  //Servisten gelen değerleri tutmak için insanlar adında dizi oluşturuldu
  insanlar = [];

  constructor(UsePipeComponent : CreateServiceService) {

    //useService ile gelen değerleri insanlar dizisinin içine atandı
    this.insanlar = UsePipeComponent.People;

  }

  ngOnInit() {
  }

}
