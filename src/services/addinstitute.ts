import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



//const httpoption = {headers : new HttpHeaders({'Authorization': '563492ad6f91700001000001a073aaf0d9cf449a9d3290a838bbf8f9'})}

@Injectable({
  providedIn: 'root'
})

export class InstituteAddService {
  

    constructor(private httpclient: HttpClient) {

    }

   // apiUrl: any = environment.LocalUrl;

    AddCINstitute(formdata): Observable<any> {
        return this.httpclient.post("http://demo.mindweapons.in/dflapi/api/InstitutionDetail/SaveInstitutionDetail",formdata);
    }

}