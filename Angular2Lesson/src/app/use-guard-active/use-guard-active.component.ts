
/*

    login-routing-service.service servisi oluşturuldu

*/

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginRoutingServiceService } from '../login-routing-service/login-routing-service.service';
import { Login } from '../login-routing/login';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UseGuardActiveComponent implements CanActivate {

  resultList: Observable<Login[]>;

  result: Promise<boolean> | boolean;

  canActivate() {

    this.resultList = this.service.islogin();
    this.result = this.resultList
      .toPromise()
      .then(data => data.filter(fill => fill.name == 'Firat Hamarat')[0].login)

    this.result.then(function (result) {

      if (result == false) {
        alert("Lütfen Giriş Yapınız!");
      }

    })

    return this.result;
  }


  constructor(private service: LoginRoutingServiceService) {

  }


}
