/*

      BootStrapCDN Projeye Eklenmesi:

      bootstrapcdn.com adresine gidilerek https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css css url'si kopyalanıp index.html dosyasına eklenir.

      form.validate.html dosyası düzenlendi

      submitForm fonksiyonu içinde ngForm kullanabilmek için kütüphane import edildi.
      import { NgForm } from '@angular/forms';

      Model dosyası tanımlandıktan sonra kullanılacak olan sayfaya import edilmesi gerekmektedir.
      import { EmployeeModel } from '../../Model/EmployeeModel';



      ---

      ng2-bootstrap kurulumu:

    npm install ng2-bootstrap --save
*/




import { Component, OnInit } from '@angular/core';

//NgForm kütüphanesi projeye import edildi
import { NgForm } from '@angular/forms';

//Model import edildi
import { DepartmentModel } from '../../Model/DepartmentModel';


@Component({
  selector: 'app-form-validate',
  //templateUrl ile .html kaynağı gösterildi
  templateUrl: "form.validate.html"
})

export class FormComponent implements OnInit {

  constructor() { }


  //Dil seçimi validate
  hasLanguageError: boolean = true;

  validateLanguage(lang: string) {

    if (lang == 'default') {
      this.hasLanguageError = true;
    }
    else {
      this.hasLanguageError = false;
    }

  }


  //İlgili modele atıfta bulunarak değerler gönderildi
  model = new DepartmentModel("Design Department", "1600 Amphitheatre Pkwy, Mountain View", false, "no", "default");

  //languages dizisi oluşturuldu ve değerler girildi
  languages = ['İngilizce', 'Türkçe', 'Almanca', 'Diğer'];




  submitForm(form: NgForm) {

    this.validateLanguage(this.model.language);

    if (this.hasLanguageError) {
      return;
    }

  }


  ngOnInit() {
  }

}
