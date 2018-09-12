
import { Component, OnInit } from '@angular/core';
import { CreateService2Service } from '../create-service2/create-service2.service';

//Observable kullanabilmek için kütüphanesi import edildi
import { Observable } from 'rxjs/Observable';

//toPromise kullanabilmek için kütüphanesi import edildi
import 'rxjs/add/operator/toPromise';


@Component({

  selector: 'app-use-observable-promise',

  template: `

  <app-demo-page *ngFor='let insan of this.PeopleObservable | async' [personData] ="insan" (personView) ="viewFunction($event)"></app-demo-page>

  <h2>Bildirim Gönderilen Kişidddlerff</h2>
  <span *ngIf="!GonderilenInsanList.length == 0">
        Sayısı: {{this.GonderilenInsanList.length}} - 
        <input type="button" value="Listeyi Temizle" (click) = "clearList()">
  </span>

  <ul>
      <li *ngFor='let insan of this.GonderilenInsanList'>
        Adı: {{insan.name}}, Şirketi: {{insan.company}} ► {{insan.state}}
      </li>
  </ul>
  `,

  styles: []

})
export class UseObservablePromiseComponent implements OnInit {

  //Servisten gelen değerleri tutmak için insanlar adında dizi oluşturuldu
  insanlar = [];

  //Output sayesinde "demo-page" sayfasında bulunan "personView" EventEmitter tetiklendiğinde "viewFunction" tetiklenmektedir, tetiklediğinde push edilen dataları tutmak amacıyla GonderilenInsanList adında dizi tanımlandı
  GonderilenInsanList = [];

  //---

  //PeopleObservable değişkeni oluşturuldu ve PeopleModel'e dizi olarak cast edildi
  PeopleObservable: Observable<PeopleModel[]>;

  //GetObservableData fonksiyonu oluşturuldu
  GetObservableData() {

    this.PeopleObservable = this.UseObservablePromiseComponent.GetObservable();

  }

  //PeoplePromise değişkeni oluşturuldu ve PeopleModel'e dizi olarak cast edildi
  PeoplePromise: Promise<PeopleModel[]>;

  //GetPromiseData fonksiyonu oluşturuldu
  GetPromiseData() {

    this.PeoplePromise = this.UseObservablePromiseComponent.GetPromise();

  }



  //--

  constructor(private UseObservablePromiseComponent: CreateService2Service) {

  }


  //ngOnInit ile yapıyı çağırması gerektiğini zorluyoruz (implements OnInit olmalıdır)
  ngOnInit() {

    this.GetObservableData();

    //this.GetPromiseData();

  }


  //viewFunction adında bir $event parametresi alan fonksiyon tanımlandı
  viewFunction($event) {

    //$event parametresi ile gelen verilere ek olarak başka bir alan eklenecek ise adaptör kullanılmaktadır 
    var GonderilenInsan = { name: $event.name, company: $event.company, state: "Tamamlandi" }

    //Aynı insan GonderilenInsanList dizisine eklenmesin diye kontrol gerçekleştirildi
    if (!this.GonderilenInsanList.find(res => res.name == GonderilenInsan.name)) {

      //$event parametresi ile gelen değerler GonderilenInsan değişkenine atandı ve bu değişken GonderilenInsanList dizisine push edildi
      this.GonderilenInsanList.push(GonderilenInsan);

    }

    //Aynı kişiyi ekleme çalıştığımızda ise ekranda uyarı mesajı gönderildi ve loglarda kayıt tutuldu
    else {

      console.log(`${GonderilenInsan.name} isimli kullanıcıya daha önceden bildirim gönderdiniz!`);
      alert(`${GonderilenInsan.name} isimli kullanıcıya daha önceden bildirim gönderdiniz!`);

    }

  }


  //GonderilenInsanList dizinini temizlemek amacıyla clearList fonksiyonu oluşturuldu
  clearList() {

    //GonderilenInsanList dizisinin içine boş değer atandı
    this.GonderilenInsanList = [];

  }

}


//create-service2 servisinde tanımlanan sınıf bu component üzerinde de tanımlanmalıdır
export class PeopleModel {
  constructor(name: string, company: string, city: string, email: string) {
  }
}

