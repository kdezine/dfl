import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



// const httpoption = {
//   headers : new HttpHeaders(
//     {
//         'http' : 'ok'
//     }
//   )
// }

@Injectable({
  providedIn: 'root'
})

export class testAddService {
  

    constructor(private httpclient: HttpClient) {

    }

   // apiUrl: any = environment.LocalUrl;

    AddTest(formdata): Observable<any> {
        return this.httpclient.post("http://demo.mindweapons.in/dflapi/api/Tests/SaveTests",formdata);
    }

}