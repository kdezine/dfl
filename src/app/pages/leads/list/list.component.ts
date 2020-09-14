import { Component, OnInit } from '@angular/core';
import { leadsListService } from '../../../../services/leadslist'
@Component({
  selector: 'app-listleads',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class LeadsListComponent implements OnInit {
  leadlist : any = []
  
  constructor(private leadslist : leadsListService) {
    this.LeadsData()
   }

  ngOnInit(): void { 
   
  }
  LeadsData()
  {
    
    this.leadslist.GetLeads().subscribe((Response) =>
    {
      this.leadlist = Response.ResponseData
    })
  }

}
