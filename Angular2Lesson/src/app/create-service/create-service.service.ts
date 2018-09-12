
/*

  CREATE SERVİCE:

  • ng g s createService angularCLI komutuyla servis oluşturuldu

  • app.module.ts dosyasına açılarak yolunun tanımlanması gerekmektedir
    import { CreateServiceService } from './create-service/create-service.service';

    Servisler providers eklenmelidir
    providers: [CreateServiceService],

  • app.module.ts üzerinde tanımlamalar gerçekleştirildikten sonra servis hangi Component içinde kullanılacaksa oraya gidilir             
    use-service/use-service.component.ts sayfasına gelinerek
    import { CreateServiceService } from './create-service/create-service.service'; 
    servis ilişkilendirmesi yapılır ve constructor alanında ilgili servis çağrılır. 

    UseServiceComponent : CreateServiceService
    ve gelen datayı ekranda göstermek amacıyla html kodları kullanılır.

    ★ NOT:
    Öncelikle ilgili service’in başka bir sınıfa inject edilebilmesi için @Injectable() olması gerekmekte ve ilgili module’ün {Injectable} import edilmesi gerekmektedir.

    import { Injectable } from '@angular/core';
    @Injectable()
 */

import { Injectable } from '@angular/core';

//Başka bir sınıftan CreateServiceService sınıfına erişilip, sınıf içinden değerler alınabilmesi anlamına gelir
@Injectable()


export class CreateServiceService {

  //Properties tanımlamaları gerçekleştirildi

  //Private türünde _people adında bir dizi değişkeni oluşturuldu
  private _people = [];

  get People() {
    return this._people;
  }

  set People(allPeople) {
    this._people = allPeople;
  }


  constructor() {

    //Bir internet servisten alınmış gibi veriler eklendi
    this._people =
      [
        {
          "name": "Margaret",
          "company": "Microsoft",
          "about": "sit eget vel molestie massa at lacus risus hendrerit risus",
          "address": {
            "streetAddress": "8871 Placerat Rd",
            "city": "Simi Valley",
            "state": "MI",
            "zip": "31363"
          }
        },
        {
          "name": "Brittany",
          "company": "Apple",
          "about": "sed non porttitor tortor lacus nec id dolor tincidunt massa",
          "address": {
            "streetAddress": "9778 Sed Dr",
            "city": "Paw Paw",
            "state": "NY",
            "zip": "71508"
          }
        },
        {
          "name": "Jamie",
          "company": "Facebook",
          "about": "fringilla odio et convallis adipiscing augue elit tortor vestibulum sit",
          "address": {
            "streetAddress": "9274 Aliquam St",
            "city": "Racine",
            "state": "VT",
            "zip": "35529"
          }
        },
        {
          "name": "Reginald",
          "company": "Facebook",
          "about": "eros facilisis tempor sapien vel magna quis nec vestibulum sit",
          "address": {
            "streetAddress": "5222 Libero Ct",
            "city": "Selma",
            "state": "OR",
            "zip": "97422"
          }
        },
        {
          "name": "Latia",
          "company": "Apple",
          "about": "sollicitudin ac odio odio tortor massa magna elit non sed",
          "address": {
            "streetAddress": "2245 In St",
            "city": "San Diego",
            "state": "ME",
            "zip": "90609"
          }
        },
        {
          "name": "Vera",
          "company": "Facebook",
          "about": "convallis ac malesuada lacus pharetra nec elementum turpis ipsum at",
          "address": {
            "streetAddress": "3 Sit Dr",
            "city": "Waukesha",
            "state": "NH",
            "zip": "24756"
          }
        },
        {
          "name": "Bridgette",
          "company": "Facebook",
          "about": "sit vitae pulvinar dolor sed elit mattis nec sapien vestibulum",
          "address": {
            "streetAddress": "5302 Ac Ave",
            "city": "Bridgewater",
            "state": "WA",
            "zip": "20278"
          }
        },
        {
          "name": "Leo",
          "company": "Apple",
          "about": "sagittis ac dolor pulvinar donec amet placerat sit sollicitudin dolor",
          "address": {
            "streetAddress": "3056 Mi St",
            "city": "Jersey Shore",
            "state": "NC",
            "zip": "64506"
          }
        },
        {
          "name": "Lorraine",
          "company": "Facebook",
          "about": "ac sed lorem etiam aenean vestibulum sed mi augue sagittis",
          "address": {
            "streetAddress": "7137 At Ln",
            "city": "South Denver",
            "state": "UT",
            "zip": "91169"
          }
        },
        {
          "name": "Chunlei",
          "company": "Apple",
          "about": "velit tellus aenean lacus ipsum sit rutrum lacus etiam in",
          "address": {
            "streetAddress": "7139 Tellus Ln",
            "city": "Covington",
            "state": "OH",
            "zip": "17446"
          }
        },
        {
          "name": "Myradaisy",
          "company": "Facebook",
          "about": "amet sed velit hendrerit egestas dolor ac sed amet dolor",
          "address": {
            "streetAddress": "2997 Quis Dr",
            "city": "Albuquerque",
            "state": "MA",
            "zip": "61921"
          }
        },
        {
          "name": "Ty",
          "company": "Microsoft",
          "about": "sagittis porta curabitur aliquam placerat sit hendrerit eget lacus amet",
          "address": {
            "streetAddress": "6930 Scelerisque Rd",
            "city": "Tallapoosa",
            "state": "MI",
            "zip": "78129"
          }
        },
        {
          "name": "Janet",
          "company": "Microsoft",
          "about": "aenean et amet nec malesuada quis et at donec placerat",
          "address": {
            "streetAddress": "554 Ac Ct",
            "city": "Onamia",
            "state": "UT",
            "zip": "70696"
          }
        },
        {
          "name": "Kasey",
          "company": "Microsoft",
          "about": "id vel lorem amet malesuada vestibulum tortor aliquam elementum aliquam",
          "address": {
            "streetAddress": "789 Scelerisque Ln",
            "city": "Fort Wayne",
            "state": "NE",
            "zip": "23031"
          }
        },
        {
          "name": "Georgina",
          "company": "Microsoft",
          "about": "eros magna id augue sagittis lacus magna vestibulum neque pulvinar",
          "address": {
            "streetAddress": "3792 Et Rd",
            "city": "Murfreesboro",
            "state": "OR",
            "zip": "15425"
          }
        },
        {
          "name": "Chun",
          "company": "Apple",
          "about": "orci aliquam sit vel sed sed hendrerit id eget ac",
          "address": {
            "streetAddress": "5123 Rutrum Rd",
            "city": "Moreno Valley",
            "state": "GA",
            "zip": "86379"
          }
        },
        {
          "name": "Luping",
          "company": "Microsoft",
          "about": "mi convallis ac non donec magna tellus mattis odio sit",
          "address": {
            "streetAddress": "8622 Mattis Dr",
            "city": "Clayton",
            "state": "FL",
            "zip": "93688"
          }
        },
        {
          "name": "Fredric",
          "company": "Microsoft",
          "about": "elementum aenean eget tempor at elementum tincidunt aliquam pulvinar tincidunt",
          "address": {
            "streetAddress": "3904 Tincidunt Ln",
            "city": "Bradford",
            "state": "VA",
            "zip": "17548"
          }
        },
        {
          "name": "Rone",
          "company": "Microsoft",
          "about": "mattis adipiscing eget consectetur pulvinar sapien sit tortor at dolor",
          "address": {
            "streetAddress": "8417 Tincidunt St",
            "city": "Beaumont",
            "state": "ME",
            "zip": "45349"
          }
        },
        {
          "name": "Amy",
          "company": "Apple",
          "about": "ac nec sit orci donec lacus morbi sed orci sollicitudin",
          "address": {
            "streetAddress": "7721 Lacus Ave",
            "city": "Riverside",
            "state": "ND",
            "zip": "35971"
          }
        },
        {
          "name": "Brooks",
          "company": "Facebook",
          "about": "sollicitudin et sapien porttitor consectetur consectetur amet suspendisse odio in",
          "address": {
            "streetAddress": "3828 Scelerisque Rd",
            "city": "Panama City Beach",
            "state": "VT",
            "zip": "62100"
          }
        },
        {
          "name": "Irina",
          "company": "Microsoft",
          "about": "aliquam nullam vitae pulvinar magna pretium dolor suspendisse lacus etiam",
          "address": {
            "streetAddress": "5664 Lorem Dr",
            "city": "Middletown",
            "state": "WY",
            "zip": "96306"
          }
        },
        {
          "name": "Ganesh",
          "company": "Apple",
          "about": "amet aenean risus porta vel et molestie risus lacus vestibulum",
          "address": {
            "streetAddress": "6479 Tortor Dr",
            "city": "Eglin Afb",
            "state": "NV",
            "zip": "74273"
          }
        },
        {
          "name": "Joanna",
          "company": "Facebook",
          "about": "porttitor ac vestibulum pharetra magna eros massa sed libero tincidunt",
          "address": {
            "streetAddress": "7180 Sed Dr",
            "city": "Sioux Falls",
            "state": "WV",
            "zip": "43833"
          }
        },
        {
          "name": "Ted",
          "company": "Microsoft",
          "about": "curabitur odio ipsum in magna magna massa sapien hendrerit at",
          "address": {
            "streetAddress": "4757 Vestibulum St",
            "city": "Lindale",
            "state": "VT",
            "zip": "77528"
          }
        },
        {
          "name": "Marilyn",
          "company": "Apple",
          "about": "nec vel neque placerat porttitor amet curabitur etiam ipsum neque",
          "address": {
            "streetAddress": "5825 Lectus Ln",
            "city": "Lockport",
            "state": "WV",
            "zip": "58752"
          }
        },
        {
          "name": "Mario",
          "company": "Facebook",
          "about": "libero dolor tellus tincidunt velit aenean sollicitudin non aliquam porta",
          "address": {
            "streetAddress": "4413 Vestibulum St",
            "city": "Akron",
            "state": "MN",
            "zip": "52409"
          }
        },
        {
          "name": "Mike",
          "company": "Microsoft",
          "about": "sed rutrum dui quis magna et eros massa aliquam ac",
          "address": {
            "streetAddress": "5737 Nullam Ave",
            "city": "Kelso",
            "state": "NJ",
            "zip": "28636"
          }
        },
        {
          "name": "Maribel",
          "company": "Microsoft",
          "about": "nec sed donec malesuada fringilla porttitor lectus sit odio hendrerit",
          "address": {
            "streetAddress": "873 Porta Ln",
            "city": "Spokane",
            "state": "IA",
            "zip": "49137"
          }
        },
        {
          "name": "Kehinde",
          "company": "Facebook",
          "about": "libero augue sit eget eget aenean risus nunc egestas tellus",
          "address": {
            "streetAddress": "8272 Amet Dr",
            "city": "Vancouver",
            "state": "WV",
            "zip": "47356"
          }
        }
      ]



  }

}
