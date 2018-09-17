import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from '../create-service/create-service.service';

@Component({
  selector: 'app-use-pipe',
  templateUrl: 'use-pipe.component.html'
})

export class UsePipeComponent implements OnInit {

  //Servisten gelen değerleri tutmak için insanlar adında dizi oluşturuldu
  insanlar = [];

  constructor(UsePipeComponent: CreateServiceService) {

    //useService ile gelen değerleri insanlar dizisinin içine atandı
    this.insanlar = UsePipeComponent.People;

  }


  //Other Pipe Use
  public name = "Angular.io";
  public message = "Welcome to Angular.io";
  public person = {
    "firstname": "Bill",
    "lastname": "Gates"
  }

  public Date = new Date();


  ngOnInit() {
  }

}
