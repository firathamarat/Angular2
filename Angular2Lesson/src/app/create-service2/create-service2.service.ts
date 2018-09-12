/*

    Not: http://www.filltext.com ile oluşturulan personData.json JSON dosyası create-service2 dizinine kopyalandı


    KÜTÜPHANE BULUNMASI:
    angular.io > DOCS > API > filter > http araması gerçekleştirilip ilgili kütüphane bulunur
    (https://angular.io/api)

        import { Http } from '@angular/http' kütüphanesi eklenmelidir

    Http tanımını yapabilmek için aynı servislerde olduğu gibi constructor kısmında http injection yapılmalıdır


    http.request ile data json çekildikten sonra mapleme yapması gerekmektedir
    map özelliğini kullanabilmek için RXJS kütüphanesi kullanıldı
    
        import 'rxjs/add/operator/map';

        import { Http, Response } from '@angular/http';

*/


import { Injectable } from '@angular/core';

//Http kütüphanesi import edildi
import { Http, Response } from '@angular/http';

//Map kütüphanesi import edildi
import 'rxjs/add/operator/map';

//Observable kütüphanesi import edildi
import { Observable } from 'rxjs/Observable';

//toPromise kütüphanesi import edildi
import 'rxjs/add/operator/toPromise';



@Injectable()
export class CreateService2Service {

  //Properties tanımlamaları gerçekleştirildi
  People: PeopleModel[];


  //Observable kullanan fonksiyon tanımlandı
  GetObservable() {

    return this.http.request('./app/create-service2/personData.json')
      .map((response: Response) => <PeopleModel[]>response.json());

  }

  //Promise kullanan fonksiyon tanımlandı
  GetPromise() {

    return this.http.request('./app/create-service2/personData.json')
      .map((response: Response) => <PeopleModel[]>response.json())
      .toPromise();

  }


  //http tanımlaması yapılabilmesi için http kütüphanesi projeye import edilmelidir
  // NOT: http tanımlamasını farlı bir metod içerisinde kullaabilmek için "private" olarak tanımlanması gerekmektedir!
  constructor(private http: Http) {

  }

}

//PeopleModel sınıfı ile mapleme işlemi gerçekleştirildi
export class PeopleModel {

  //Adapter Dizayn Pattern: İlgili proje üzerinde ne lazım ise datayı alıp ona göre kullanmaktır

  //Daha mapleme işlemi gerçekleştirildi
  constructor(name: string, company: string, city: string, email: string) {

  }

}