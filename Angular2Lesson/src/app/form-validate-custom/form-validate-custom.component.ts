

/*
Dinleme servisimiz oluşturuldu
form-node-server-->
npm init diyip proje dosyaları oluşturuluyor
npm install --save formidable
node server.js




post servisi oluşturuldu
app.module.ts üzerinde tanımlanmalıdır

*/



import { Component, OnInit } from '@angular/core';

//NgForm kütüphanesi projeye import edildi
import { NgForm } from '@angular/forms';

//Model import edildi
import { DepartmentModelCustom } from '../../Model/DepartmentModelCustom';

import { FormPost } from "../../Services/form-post.server";


@Component({
  selector: 'app-form-validate-custom',
  templateUrl: "form.validate.html"
})

export class FormValidateCustomComponent implements OnInit {


  constructor(private service: FormPost) { }



  hasLanguageError: boolean = true; //hasLanguageError adında değişken oluşturuldu

  validateLanguage(lang: string) {

    if (lang == 'default') {
      this.hasLanguageError = true;
    }
    else {
      this.hasLanguageError = false;
    }

  }


  //İlgili modele atıfta bulunarak değerler gönderildi
  model = new DepartmentModelCustom("Design Department", "1600 Amphitheatre Pkwy, Mountain View", false, "no", "default", "");

  //languages dizisi oluşturuldu ve değerler girildi
  languages = ['İngilizce', 'Türkçe', 'Almanca', 'Diğer'];




  submitForm(form: NgForm) {



    this.validateLanguage(this.model.language);

    if (this.hasLanguageError) {
      return;
    }

    this.service.postDepartmentForm(this.model).subscribe(
      data => console.log("Gönderilen Data: " + data),
      err => console.log("Error: " + err)
    );

  }


  //upperCase fonksiyonu oluşturuldu, birden fazla input üzerinden farklı işlevler gerçekleştireceğinden 2 adet parametre aldı
  upperCase(name: string, type: string) {

    //uzunluk kontrolü yapıldı 
    if (name.length > 0) {

      //Eğer gelen type değeri "departmentName" ise model.departmentName modeline name parametresinin taşıdığı değerin ilk harfini büyük yapılıp atandı
      if (type == "departmentName") {
        this.model.departmentName = name.charAt(0).toUpperCase() + name.slice(1);
      }

      //Eğer gelen type değeri "departmentAddress" ise model.departmentAddress modeline name parametresi ile gelen değerin tüm karakterleri büyük yapılıp atandı
      else if (type == "departmentAddress") {
        this.model.departmentAddress = name.toUpperCase();
      }


    }

    //name değeri 0 değerinden büyük değil ise ilgili modellere önceden atanan değerler atandı
    else {

      if (type == "departmentName") {
        this.model.departmentName = name;
      }

      else if (type == "departmentAddress") {
        this.model.departmentAddress = name;
      }

    }


    /*
  upperCaseDepartmentName(name: string){

    if(name.length>0){
      this.model.departmentName = name.charAt(0).toUpperCase() + name.slice(1);
    }

    else{
      this.model.departmentName = name;
    }
    
    */

  }


  //Eposta adresi için bir pattern hazırlandı
  emailPattern = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";


  //Maaş beklentisi doğrulaması
  salleryCheckValue(sallery) {

    if (sallery.which >= 48 && sallery.which <= 57) {
      return true;
    }

    else {

      console.log(`Girmiş olduğunuz "${sallery.key}" bir sayısal ifade değildir, lütfen sayısal ifade giriniz!`);

      return false;
    }

  }


  ngOnInit() {
  }

}
