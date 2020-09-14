import { Component, OnInit } from '@angular/core'
import { leadsListService } from '../../../../services/leadslist'

@Component({
  selector: 'app-leadreport',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadReportComponent implements OnInit {
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
