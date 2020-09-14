import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';



//const httpoption = {headers : new HttpHeaders({'Authorization': '563492ad6f91700001000001a073aaf0d9cf449a9d3290a838bbf8f9'})}

@Injectable({
  providedIn: 'root'
})

export class CollectionListService {

    constructor(private httpclient: HttpClient) {

    }

   // apiUrl: any = environment.LocalUrl;

    GetCollections(): Observable<any> {
        return this.httpclient.get("http://demo.mindweapons.in/dflapi/api/CollectionCenter/GetCollectionCenter/0/a").pipe(
          retry(3)
        );
    }

}