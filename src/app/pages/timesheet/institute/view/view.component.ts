import { Component, OnInit } from '@angular/core';
import { ViewInstituteService } from '../../../../../services/viewinstitute'
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewInstituteComponent implements OnInit {
  id : any
  name : any
  testData : any 
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _viewinstitute:ViewInstituteService) { }


  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id')
      this.name = params.get('name')
      this.viewData();
  })
  }
  viewData() {
    this._viewinstitute.ViewInstitutet(this.id, this.name).subscribe((res) => {
      this.testData = res.data.Table[0];
    });
  }

}
