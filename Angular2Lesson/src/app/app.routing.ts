/*

    routing-demo-page dizininde menü sayfaları olacak 2 Component oluşturuldu ve düzenlendi

    ★ Not: Eklenen her Component app.module.ts üzerinde import ve declare edilmelidir

    app.routing.ts dosyası oluşturuldu ve içindeki komutlar snippet kullanılarak oluşturuldu

    routing-demo-page dizininde oluşturulan 2 Component, app.module.ts sayfasına eklendiği gibi bu dosyayada import edilmelidir

    ★ @angular/core kütüphanesinde NgModule yerine ModuleWithProviders kütüphanesi kullanıldı

    use-routing Component'i oluşturuldu

    app.routing.ts sayfasını app.module.ts dizinine tanımlamak gerekmektedir

    import { routing } from './app.routing';
    imports: [ routing ] alanına eklenmelidir


    routing-demo-page dizininde app.menu.ts Componenti oluşturuldu (app.module.ts import edilmeli)

    app.menu.html sayfası düzenlendi

    app.module.ts diziminde  bootstrap(startPage) alanı app.menu.ts ile değiştirilmelidir
    bootstrap: [MenuComponent]

    index.html alanında ilgili app.menu.ts Componenti çağrılmalıdır
    <menu></menu>


    --//


    Guard Kullanımı:

    Sayfa üzerinde bir değişiklik yapıldığında çıkarken uyarı vermesi amacıyla kullanılabilmektedir
    Login olmayan bir insanın menuden bu alana girmesi engellenebilir

    guard-deactive.component.ts dosyası oluşturuldu

    guard-deactive.component.ts sayfasında tüm düzenlemeler bittikten sonra sırada kullanmak var

    import { GuardDeactiveComponent } from './use-guard-deactive/guard-deactive.component'; projeye dahil edildi
ve 
     canDeactivate: [GuardDeactiveComponent] şeklinde kullanıldı


     Gurlar aynı setvisler gibi apmoulede servislerle birlikte kullanılır
*/


//Yapılan işlem: Verilen Anahtar kelimelere göre Componentlerin yolunun belirlenmesidir

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Oluşturulan Menü Componentler import edildi
import { NewsPageComponent } from './routing-demo-page/news-page.component';
import { WeatherPageComponent } from './routing-demo-page/weather-page.component';
import { UseRoutingComponent } from './use-routing/use-routing.component';

//Guard Componentler import edildi
import { GuardDeactiveComponent } from './use-guard-deactive/guard-deactive.component';
import { UseGuardActiveComponent } from './use-guard-active/use-guard-active.component';


const appRoutes: Routes = [

    //main yazıldığı zaman UseRoutingComponent Componentine gidilsin

    { path: 'main', component: UseRoutingComponent, canDeactivate: [GuardDeactiveComponent] },
    { path: '', component: UseRoutingComponent }, //Default değer
    { path: 'weather', component: WeatherPageComponent, canActivate: [UseGuardActiveComponent] },
    { path: 'news', component: NewsPageComponent },
    
    // recirectTo

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
