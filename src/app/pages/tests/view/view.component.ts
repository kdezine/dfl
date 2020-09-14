import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ViewTestService } from '../../../../services/viewtest'

@Component({
  selector: 'app-viewtest',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewTestComponent implements OnInit {

  tid : any
  tname : any

  tdetail

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _testdetail:ViewTestService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.tid = params.get('id'); 
  });
  }

}
