
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DepartmentModelCustom } from '../Model/DepartmentModelCustom';
import 'rxjs/RX';

@Injectable()
export class FormPost {

    constructor(private http: Http) {


    }

    extractData(res: Response) {
        let body = res.json();
        return JSON.stringify(body.data) || {};
    }

    handelError(error: any) {
        console.log("Error: " + error);
        return Observable.throw(error.statusText);
    }

    postDepartmentForm(department: DepartmentModelCustom): Observable<any> {

        let body = JSON.stringify(department);
        let header = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: header });

        return this.http.post("http://localhost:1453/processForm", body, options).map(this.extractData).catch(this.handelError);

    }


}