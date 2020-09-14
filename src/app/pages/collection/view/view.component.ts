import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionListService } from "../../../../services/collectionlist";

@Component({
  selector: 'app-viewcollection',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewCollectionComponent implements OnInit {
  cdata : any = []
  myParam: string;
  constructor(
    private router: ActivatedRoute,
    private collectionlist : CollectionListService)
    { 
      this.GetcollectionData()
    }

  ngOnInit(): void {
  
  }

  GetcollectionData()
  {
    this.collectionlist.GetCollections().subscribe((Response) =>
    {
      this.cdata = Response.ResponseData
    })
  }

}
