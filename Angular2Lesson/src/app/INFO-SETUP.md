
# NODE.JS KURULUMU:
Cihaz üzerinde NODE.JS olması gerekmektedir.
https://nodejs.org/en/ adresinden indirebilirsiniz.


/-------------------------------------------------------------------------------------------------


# Angular CLI (Command Line Interface):

Angular 2’de yeni bir proje oluşturmak için bazı TypeScript, JSON vb. ayar dosyalarını oluşturmak, içlerini doldurmak, uygulamanın dizin yapısını ayarlamak… gibi birçok adım var gerçekleştirmek gerekmektdir. Bu adımlar için bazı araçlar ve hazır kütüphaneler bulunmaktadır. Bunlardan biri ise Angular 2 CLI'dır

_Not: CLI kurulumu veya proje oluşturmak için Node.js 4 veya üzeri bir sürüm ile npm 3 ve üzeri bir sürümün bilgisayarınızda kurulu olması gereklidir._


# KURULUM:

• Step 1: npm install -g angular-cli  
Komutuyla Angular CLI kurulumu gerçekleştirilir.


# PROJE OLUŞTURMA:

• Step 1: ng new proje-ismi
Angular CLI ile yeni bir proje oluşturulur

• Step 2: cd proje-ismi
Komutuyla oluşturulan projenin dizinine gidilir

• Step 3: ng serve
Komutuyla proje derlenip localhost:4200 portunda hayata geçmektedir (port değiştirmek istenirse: ng service --port 1234)


# ÖZET:
    > npm install -g angular-cli 
    > ng new proje-ismi 
    > cd proje-ismi
    > ng serve


# DİĞER KOMUTLAR:

Component >	ng g component yeni-component
Directive >	ng g directive yeni-directive
Pipe	  > ng g pipe yeni-pipe
Service	  > ng g service yeni-service
Class	  > ng g class yeni-class
Interface >	ng g interface yeni-interface
Enum      > ng g enum yeni-enum
Module	  > ng g module modul


