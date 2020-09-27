import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewCollectionService } from "../../../../services/viewcollection";

@Component({
  selector: 'app-viewcollection',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewCollectionComponent implements OnInit {
  id : any
  name : any
  testData : any 
  tabcount = 2
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _viewcollection:ViewCollectionService) { }

    ngOnInit(): void {
      this._Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id')
        this.name = params.get('name')
        this.viewData();
    })
    }
    viewData() {
      this._viewcollection.ViewCollection(this.id, this.name).subscribe((res) => {
        this.testData = res.ResponseData[0];
      });
    }

}
