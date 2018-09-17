
/*
  main.ts(AppModule) > app.module.ts(sayfa, servis) şeklinde tanımlamalar gerçekleştirilir main.ts ile ayağa kalkmaktadır
  
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { OneWayBindingComponent } from './one-two-way-binding/one-two-way-binding.component';

import { CreateServiceService } from './create-service/create-service.service';
import { UseServiceComponent } from './use-service/use-service.component';

import { ExampleComponent } from './example/example.component';

import { UseInputOutputComponent } from './use-input-output/use-input-output.component';
import { DemoPageComponent } from './demo-page/demo-page.component';

import { UseAdapterComponent } from './use-adapter/use-adapter.component';
import { CreateService2Service } from './create-service2/create-service2.service';

import { UseObservablePromiseComponent } from './use-observable-promise/use-observable-promise.component';
import { UsePipeComponent } from './use-pipe/use-pipe.component';
import { CapitalLetter } from './create-pipe/capitalLetter';
import { PipeDemoPageComponent } from './pipe-demo-page/pipe-demo-page.component';


import { NewsPageComponent } from './routing-demo-page/news-page.component';
import { WeatherPageComponent } from './routing-demo-page/weather-page.component';
import { UseRoutingComponent } from './use-routing/use-routing.component';
import { routing } from './app.routing';
import { MenuComponent } from './routing-demo-page/app.menu';

import { GuardDeactiveComponent } from './use-guard-deactive/guard-deactive.component';
import { UseGuardActiveComponent } from './use-guard-active/use-guard-active.component';

import { LoginRoutingServiceService } from './login-routing-service/login-routing-service.service';
import { LoginRoutingComponent } from './login-routing/login-routing.component';
import { FormComponent } from './form-validate/form.validate.component';
import { FormValidateCustomComponent } from './form-validate-custom/form-validate-custom.component';



import { FormPost } from '../Services/form-post.server';







@NgModule({

  declarations: [ // ♦ Tanımlanan Componentler declarations kısmına eklenmelidir
    AppComponent,

    OneWayBindingComponent,
    UseServiceComponent,
    ExampleComponent,
    UseInputOutputComponent,
    DemoPageComponent,
    UseAdapterComponent,
    UseObservablePromiseComponent,
    UsePipeComponent,
    CapitalLetter,
    PipeDemoPageComponent,

    NewsPageComponent,
    WeatherPageComponent,
    UseRoutingComponent,
    MenuComponent,

    LoginRoutingComponent,
    FormComponent,
    FormValidateCustomComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],

  providers: [CreateServiceService, CreateService2Service, GuardDeactiveComponent, LoginRoutingServiceService, UseGuardActiveComponent, FormPost], //Servis tanımlamaları ise providers kısmında yapılmaktadır

  bootstrap: [AppComponent]
  //bootstrap: [MenuComponent]

})
export class AppModule { }
