/* 

Step 1: Oluşturulan servisin Component'e dahil edip ngFor ile tüm datanın ekranda gösterilmesi
Step 2: Output ile gelen $event değerini kullanarak adaptör yardımıyla gelen dataya yeni bir alanın eklenmesi
Step 3: "personView" EventEmitter'ın tetiklenmesi ile birlikte "viewFunction" fonksiyonun tetiklenmesi ve tetiklenme durumuna göre $event ile gelen datayı yeni alana ekleme ve liste dizine atanıp ekranda gösterilmesi
Step 4: .length özelliğini kullanarak ilgili dizide bulunan elemanlarının sayısının gösterilmesi
Step 5: Dizide eleman olmaması durumunda bilgi alanlarının *ngIf ile gösterilmememesi
Step 6: Dizide eleman olması durumunda ilgili buton ile (click) event'ını kullanarak dizinin içinin temizlenmesi

line 21:  *ngIf="!this.GonderilenInsanList.length == 0" ifadesiyle GonderilenInsanList dizisinin uzunluğu 0 olmaması durumunda ekranda görünmesi sağlandı
line 22:  {{this.GonderilenInsanList.length}} ifadesiyle GonderilenInsanList dizisinin uzunluğu ekranda gösterildi

*/

import { Component, OnInit } from '@angular/core';

//Oluşturulan servis component'e import edildi
import { CreateServiceService } from '../create-service/create-service.service';


@Component({
  selector: 'app-use-adapter',
  templateUrl: 'use-adapter.component.html',
  styles: []
})


export class UseAdapterComponent implements OnInit {

  //Servisten gelen değerleri tutmak için insanlar adında dizi oluşturuldu
  insanlar = [];

  //----

  //Output sayesinde "demo-page" sayfasında bulunan "personView" EventEmitter tetiklendiğinde "viewFunction" tetiklenmektedir, tetiklediğinde push edilen dataları tutmak amacıyla GonderilenInsanList adında dizi tanımlandı
  GonderilenInsanList = [];

  //----

  constructor(UseAdapterComponent: CreateServiceService) {

    //useService ile gelen değerleri insanlar dizisinin içine atandı
    this.insanlar = UseAdapterComponent.People;

  }


  ngOnInit() {
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

