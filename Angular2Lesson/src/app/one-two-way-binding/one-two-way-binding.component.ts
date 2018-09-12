
/*

    # 1.LESSON --> one-two-way-binding ✔
    ( One Way Binding, Two Way Binding, Event, Ref and Property )

    Component >	ng g c one-two-way-binding ile component oluşturuldu


    ♦ ONE WAY BINDING : Tek Yönlü Veri Bağlama

      Binding bir objeyi başka bir objeyle ilişkilendirmek ve objenin değeri değiştiği zaman ilişkilendirildiği yerin de değerinin otomatik değişmesini sağlamaktadır.

      Klasik template(ek markup ve directive'leri içeren, derlenmemiş HTML) sistemlerinde bu data binding türü kullanılmaktadır. Modelinizde yaptığınız bir değişikliğin sayfanızda da görünür kılınması için; gerekli senkronizasyon kodunu kendiniz yazmanız gerekir. Veri bağlama(data-binding) yapılarıda model değiştiğinde view(görünüm) de otomatik olarak değişmektedir.

    ♦ TWO WAT BINDING : Tek Yönlü Veri Bağlama

      Angular template sistemlerinde bu data binding türü kullanılmaktadır. Sayfanızda veya modelinizden herhangi birinde yaptığınız değişiklik diğerinde görünür olacaktır. Modelinizin bir önceki değerini saklıyor ve modelde herhangi bir değişiklik yapıldığında, ilgili nesnenin change event'ini çağırıyor. Bu karşılaştırma basit bir "dirty-checking"dir ve bu işi Angular bizim için yürütmektedir.

    NOT: [] : Properties , () : eventler için kullanılır

    Objelere default değer vermek için:
  • Angular 2 : [value] = ""
  • Angular 1 : ngmodel = "" şeklinde verilmektedir

*/


import { Component, OnInit } from '@angular/core';


@Component({

  //selector: İlgili Componente verilen isimdir
  selector: 'one-way-binding',

  //template: HTML kodlarının yazıldığı alan, 
  //★ NOT: Alt Gr + , tuşları ile yaratılan backslash(``) kullanılarak daha rahat kod yazım imkanı sunar

  templateUrl: "one-two-way-binding.component.html",

  //styles: Stil tanımlamaları gerçekleştirilir
  styles: []

})


export class OneWayBindingComponent implements OnInit {

  //Default değerler oluşturmak için değişkenler declare edildi (TypeScript)

  //One Way Binding değişkenleri
  strName: string;
  strSurname: string;

  //Two Way Binding değişkenleri
  personName: string;
  personSurname: string;

  //Fatura Örneği değişkenleri
  faturaSeriNo: string;
  faturaSahibi: string;



  //constructor: İlgili sınıfın constructor'ında değişkenlere ilgili değerler atanır
  constructor() {

    //Typescript tarafında tanımlanan değişkenlere this ile erişip değerler atandı
    this.strName = "Bill";
    this.strSurname = "Gates";

    this.personName = "Elon";
    this.personSurname = "Mask";

  }


  //onayFunction adında public bir fonksiyon oluşturuldu
  public onayFunction() {

    //Texboxlardan Two Way Binding ile alınan değerler ekranda alert mesajıyla gösterildi
    alert(`Seri Numarası: ${this.faturaSeriNo} - Sahibi: ${this.faturaSahibi} olan faturanın ödenmesi gereken 99 TL borcu bulunmaktadır.`);

    //Kullanıcıdan alınan bilgiler loglara yazıldı
    console.log(`Seri Numarası: ${this.faturaSeriNo} - Sahibi: ${this.faturaSahibi}`);

    // Not: console.log("Seri Numarası: " + this.faturaSeriNo + " - Sahibi: " + this.faturaSahibi); şeklindede yazılabilmektedir.

  }


  //onlyNumbers adında public bir function oluşturuldu
  public onlyNumbers($event) {

    //(keypress) ile ilgili tuşun $event değerleri parametre ile alındı ve charCode ile ASCII değerleri ile koşul sağlandı

    if ($event.charCode < 49 || $event.charCode > 57) {

      console.error(`Belirtilen alanın dışında karekter girildi!`);

      return false; // Girllen değer aralığının dışında değer yazılırsa ekrana gönderilmez


    }

    //Parametre ile alınan $event ifadesi log ekranına gönderildi
    console.log($event);

  }


  //CheckMail adında public bir function oluşturuldu ve txtEmail.value ile gelen değer gelenMail ile tutuldu
  CheckMail(gelenMail) {

    //gelenMail değeri ekranda uyarı olarak gösterildi
    alert("Mail doğrulama işlemi yapıldı: " + gelenMail);

    //gelenMail değeri loglara yazıldı
    console.log(`Mail doğrulama işlemi yapıldı: ${gelenMail}`);

  }


  ngOnInit() {
  }

}
