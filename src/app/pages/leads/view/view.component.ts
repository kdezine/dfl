import { Component, OnInit } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { ViewLeadService } from '../../../../services/viewlead'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id : any
  name : any
  testData : any 
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _viewlead:ViewLeadService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id')
      this.name = params.get('name')
      this.viewData();
  })
  }
  viewData() {
    this._viewlead.ViewLead(this.id, this.name).subscribe((res) => {
      this.testData = res.ResponseData[0];
    });
  }
}
