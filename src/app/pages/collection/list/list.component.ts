import { Component, OnInit } from '@angular/core';
import { CollectionListService } from "../../../../services/collectionlist";
@Component({
  selector: 'app-listcollection',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CollectionListComponent implements OnInit {
  clist : any = []
  cid : any 
  tableview : boolean = false
  constructor(private collectionlist : CollectionListService) { 
    this.GetcollectionData()
  }

  ngOnInit(): void {   
  }

  GetcollectionData()
  {
    
    this.collectionlist.GetCollections().subscribe((Response) =>
    {
      this.clist = Response.ResponseData
      this.cid = Response.CollectionId
    })
  }
}
