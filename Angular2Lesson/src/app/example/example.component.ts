
/*
      
        ANGULARJS vs ANGULAR2 :

        AngularJS1 ile model tanımlanırken: ng-model = ""
        Angular2 ile model tanımlanırken: [(ngModel)] = "" şeklinde tanımlanır.
        ----
        AngularJS1 ile tıklama eylemi gerçekleştirmek için: ng-click = ""
        Angular2 ile tıklama eylemi gerçekleştirmek için: (click) = "" ifadesi kullanılır.
        ----
        AngularJS1 ile bir elementi geçersiz kılmak için: disabled = ""
        Angular2 ile bir elementi geçersiz kılmak için: [disabled] = "" kullanılmaktadır.
        ----
        AngularJS1 ile koşullu biçimlendirme yapmak için: ng-class = "{'sbold' : mbold"}
        Angular2 ile koşullu biçimlendirme yapmak için: [class.sbold] = "mbold" ifadesi kullanılır.
        ----
        AngularJS1 ile tekrarlı işlem gerçekleştirmek için: ng-repeat = "item in items", index numarasını almak için: $index
        Angular2 ile tekrarlı işlem gerçekleştirmek için: *ngFor = "let item of items", index numarası almak için ;let i = index" ifadesi kullanılır.
        ----
        AngularJS1 ile klavyeden bir tuşa basıldığında işlem yapmak için;
           ng-keyup="$event.keyCode == 13 ? Function():null" ifadesi kullanılırken
        Angular2 ile klavyeden bir tuşa basıldığında işlem yapmak için;
           (keyup.enter) = "Function()" ifadesi kullanılır.
      
        AngularJS1 ile bir koşul verilmesi istendiğinde ng-if="expression" ifadesi kullanılır,
        Angular2 ile bir koşıl ifades verilmesi istebdiğinde *ngIF="expression" ifadesi kullanılır.

        AngularJS1 ile nesneleri gizlemek veya göstermek için ng-show="" ve ng-hide="" kullanılırken
        Angular2 ile nesneyi gizlemek için : [hidden]="" kullanılır
     

        NOT: AltGr + , ile `` koyulduktan sonra html kodları düzenli bir şekilde yazılabilmektedir

        {{expression}}

        Oluturulan componentin selector kısmı .example şeklinde yazılarak bir class gibi kullanılabilmektedir --> <div class="example"></div>
        aynı şekilde [example] şeklinde kullanıldığında ise attribute olarak kullanılabilmektedir --> <div example></div>

 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',

  //styles: [] //Stil biçimlendirmeleri yapılmaktadır, sadece bu class içinde kullanılabilmektedir
  //styleUrls: ['./example.component.css']
  styles: [`
    
  .aktif {font-family:verdana; color:green}
  .pasif {font-family:verdana; color:brown}

  .error{
    color:red;
  }

  .red {
    color:red;
  }

  .green {
    color:green;
  }

`]

})


export class ExampleComponent implements OnInit {

  //RandomDeger adında değişken tanımlandı ve default değer olarak 0 değeri atandı
  RandomDeger = 0;

  //RandNumber fonksiyonu oluşturuldu
  RandNumber() {

    //this ile class içindeki değerlere erişilebilmektedir
    this.RandomDeger = Math.random();

    //RasgeleDeger değişkeni ekranda uyarı olarak gösterildi
    alert(`Oluşturulan Random Değer: ${this.RandomDeger}`);

    //Takip etmek amacıyla oluşturulan RandomDeger loglara gönderildi
    console.log(`Oluşturulan Random Değer: ${this.RandomDeger} `)

    //window.confirm(); ile ekrana bir bilgi mesajıda gönderilebilmektedir

  }

  //-->

  //example.component.css tarafında tanımlanan style'in değeri styleValue değerine verildi ve expression ile <span> elementine atandı
  styleValue = "myclass";
  //@Component altında bulunan styleUrls:[] alanına css dosyasının adresi yazılmalıdır

  //-->

  //insertEnterFunction adında fonksiyon oluşturuldu ve insertEnter adında parametre aldı
  insertEnterFunction(insert) {

    //Parametre ile alınan değer ekranda gösterildi
    alert(`İşlem yapmak istediğiniz seri numarası ${insert}`);

  }

  insertSpaceFunction() {

    //Space tuşuna basıldığında insertSpaceFunction fonksiyonu çalışarak ekrana bilgi mesajı gönderildi
    alert(`UYARI: Böyle bir görev ataması yapılmadı!`);

  }

  //-->

  //items adında içinde ad, soyad, yas değerlerinin bulunduğu dizi tanımlandı
  items = [
    { "ad": "Elif", "soyad": "Avşar", "yas": 24 },
    { "ad": "Fırat", "soyad": "Hamarat", "yas": 24 },
    { "ad": "Ali", "soyad": "Sönmez", "yas": 15 },
    { "ad": "Veli", "soyad": "Söner", "yas": 25 },
    { "ad": "Ayşe", "soyad": "Sönecek", "yas": 12 },
    { "ad": "Mehmet", "soyad": "Söndü", "yas": 22 }
  ];

  //-->

  //veriler adında içinde değerler bulunan dizi tanımlandı
  veriler = ["Patates", "Peynir", "Makarna"];

  insert: string;

  //insertFunction adında dışarıdan insert parametresi alarak veriler dizisine push yapan ve modelin içindeki yazıyı temizleyen fonksiyon yazıldı
  public insertFunction(insert) {

    this.veriler.push(insert); //Push veri eklemek için kullanılmaktadır
    this.insert = "";

  }

  //deleteFunction adında veriler dizisinde parametre ile gelen değeri splice ile silen fonksiyon yazıldı 
  public deleteFunction(indexNumber) {

    //splice silmek ve güncellemek için kullanılmaktadır
    this.veriler.splice(indexNumber, 1);

  }

  //-->

  //ngif direktifini göstermek amacıyla oluşturulmuş değer
  number = 0;


  bildirim = false; //bildirim adında değer oluşturulup false değeri atandı

  clickFunction() {

    this.bildirim = !this.bildirim;

  }


  //Style biçimlendirmesi için değişken oluşturuldu
  hasError = false;


  //public şekilde bir stil biçimlendirmedi gerçekleştirilebilir
  public titleStyle = {
    "color": "orange",
    "font-family": "verdana"
  }


  //Switch nesnesi için color adında değişken oluşturuldu
   SelectColor = "blue";

  constructor() {

  }

  ngOnInit() {
  }

}
