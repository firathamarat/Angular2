
import { Injectable } from '@angular/core';

//Http kütüphanesi import edildi
import { Http, Response } from '@angular/http';

//Observable kütüphanesi import edildi
import { Observable } from 'rxjs/Observable';

//login.ts adında bir sınıf oluşturuldu

//login sayfası import edildi
import { Login } from '../login-routing/login';



//Bir servisi başka bir alanda kullanabilmek için Injectable() olması gerekmektedir
@Injectable()
export class LoginRoutingServiceService {

  islogin(): Observable<Login[]> {

    return this.http.request('../app/login-routing-service/loginUserData.json?v=1.00')
      .map((response: Response) => <Login[]>response.json());

  }

  constructor(private http: Http) { }

}
