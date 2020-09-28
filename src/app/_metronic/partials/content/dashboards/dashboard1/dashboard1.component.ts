import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../core';
import { leadsListService } from '../../../../../../services/leadslist'
import { GetInstituteService } from '../../../../../../services/getinstitutes'
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
})
export class Dashboard1Component implements OnInit {

  misleads : any[]
  dashleads : any = []
  dashins : any = []
  
  constructor(private leadslist : leadsListService,private inslist : GetInstituteService) {
  
   }

  ngOnInit(): void {

    this.misleads = [
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'}
    ]
    this.leadslist.GetLeads().subscribe((Response) =>
    {
      this.dashleads = Response.data.Table
    })
    this.inslist.GetInstitutes().subscribe((Response) =>
    {
      this.dashins = Response.data.Table
    })
  }
}
