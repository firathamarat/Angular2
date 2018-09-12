/*
    CanDeactivate kütüphanesi eklendi
    import { CanDeactivate } from '@angular/router';

    NOT: Guard'lar aynı servisler gibi app.module.ts dosyasında "providers" alanına eklenir 

*/

//CanDeactivate kütüphanesi projeye import edildi
import { CanDeactivate } from '@angular/router';

//UseRoutingComponent sayfasında kullanabilmek için UseRoutingComponent Componenti projeye import edildi
import { UseRoutingComponent } from '../use-routing/use-routing.component';


//UseRoutingComponent sayfasından çıkarken uyarı verilmesi sağlandı

export class GuardDeactiveComponent implements CanDeactivate<UseRoutingComponent> {

  canDeactivate(target: UseRoutingComponent) {

    //UseRoutingComponent sayfasına düzenlemeler yapılıyor

    if (target.hasChange) {

      //Ekrana bilgilendirme mesajı gönderildi
      return window.confirm("Bir değişiklik yaptınız! Çıkmak istediğinize emin misiniz?");

    }

    return true;

  }

}
