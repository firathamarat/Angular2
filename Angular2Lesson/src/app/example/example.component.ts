
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
  template: `
  <h2>Angular 2 Example</h2>

  <input type="text" [(ngModel)]="personName" placeholder="Adınızı Giriniz">
  <input type="text" [(ngModel)]="personNumber" placeholder="Personel Numaranız"><br>
  <span>İşleme {{personNumber}} Personel numaralı {{personName}} ile devam edilmektedir</span>

  <br><br> <!----> --- <br><br>

  <input type="number" [(ngModel)]="birthYear" placeholder="Doğum Yılınızı giriniz">
  <span *ngIf="birthYear >0">{{2018 - birthYear}} - Yaşındasınız.</span>

  <br><br> <!----> --- <br><br>

  <!-- (click) event'ı kullanılarak tıklama eylemi gerçekleştiğinde 'RandNuber()' fonksiyonu çalıştrıldı -->
  <input type="button" value="Random Sayı Üret" (click)="RandNumber()">
  <span class={{styleValue}}>Oluşturulan Randum Sayı: <b>{{RandomDeger}}</b></span>

  <br><br> <!----> --- <br><br>

  <input type="checkbox" [(ngModel)]="state"> Etkisiz Kıl: {{state}}<br>
  <input type="text" [disabled]="state" placeholder="Değer Giriniz:">
  <input type="button" [disabled]="state" value="GÖNDER">

  <br><br> <!----> --- <br><br>

  <input type="text" [(ngModel)] = "insert" (keyup.enter) = "insertEnterFunction(insert)" (keyup.space)="insertSpaceFunction()" placeholder="Seri Numarası Giriniz:"> → (Enter ve Space Tuşu)

  <br><br> <!----> --- <br><br>

  <input type="checkbox" [(ngModel)] = "mbold"> Kalın
  <input type="checkbox" [(ngModel)] = "mitalic"> İtalik
  <input type="checkbox" [(ngModel)] = "munderline"> Alt Çizgi
  <input type="checkbox" [(ngModel)] = "mlinethrough"> Üst Çizgi
  
  <br>

  <span
  [class.sbold] = "mbold" 
  [class.sitalic] = "mitalic" 
  [class.sunderlined] = "munderline" 
  [class.slinethrough] = "mlinethrough">Bu alan Chechbox hareketine göre style değiştirmektedir.</span>

  <br><br> <!----> --- <br><br>

  <div [class.error]= "true">Bu kısım "hasError" değişkeni true değeri taşıdığında kırmızı olmaktadır</div>

  <br><br> <!----> --- <br><br>




 <ul>
    <p class="myclass">*ngFor = "let item of items" ile ekrana veriler yazdırıldı</p>
    <li *ngFor="let item of items">{{item.ad}} {{item.soyad}} {{item.yas}}</li>
 </ul>

<ul>
  <p class="myclass">*ngFor="let item of items; let i = index" ile ekrana veriler index numarasıyla yazdırıldı</p>
  <li *ngFor="let item of items; let i=index">{{i}} - {{item.ad}} {{item.soyad}} {{item.yas}} </li>
</ul>

<br><br> <!----> --- <br><br><br>

<input type="text" [(ngModel)]="insert" (keyup.enter)="insertFunction(insert)" placeholder="Eklenecek Değer"> (Enter)

<ul>
  <li *ngFor="let veri of veriler; let indexNumber = index">{{indexNumber}}
  <button class="btn" (click)="deleteFunction(indexNumber)"> SİL </button> {{veri}}</li> 
</ul>

<br> <!----> --- <br><br>

<input type="button" value="+" (click) = "number = number + 1">
<input type="button" value="-" (click) = "number = number - 1">
<span [ngClass] ="{'myclass': number>=5}">Sayaç: {{number}}</span>
<span *ngIf="number>=5">(Maks. girilme değeri aşıldı!)</span><br>
<span [hidden] = "number >=5">Not: En fazla 5 değeri girilebilmektedir.</span>

<br> <!----> --- <br><br>

<button (click) = "clickFunction($event)">
        <span [hidden]="bildirim">KAPALI</span>
        <span [hidden]="!bildirim">AÇIK</span>
    </button>

    <span [ngClass]="bildirim ? 'aktif' : 'pasif'">Bildirim durumu</span>

    <br>
    <hr>

    <p [hidden]="!bildirim">Hidden = {{bildirim}} → Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est maxime ratione nam obcaecati, distinctio laboriosam non neque atque, repellat harum? Voluptates facilis maxime atque dicta laborum! Soluta, doloribus magni.</p>

    <p *ngIf="bildirim"> *ngIf = {{bildirim}} → Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est maxime ratione nam obcaecati, distinctio laboriosam non neque atque, repellat harum? Voluptates facilis maxime atque dicta laborum! Soluta, doloribus magni.</p>
    {{bildirim ? 'aktif': 'pasif'}}
 
  `,

  //styles: [] //Stil biçimlendirmeleri yapılmaktadır, sadece bu class içinde kullanılabilmektedir
  //styleUrls: ['./example.component.css']
  styles : [`
    
  .aktif {font-family:verdana; color:green}
  .pasif {font-family:verdana; color:brown}

  .error{
    color:red;
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

  clickFunction(){

      this.bildirim =! this.bildirim;

  }

  constructor() {

  }

  ngOnInit() {
  }

}
