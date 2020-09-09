import { Component, OnInit } from '@angular/core';
import { GetLeadsService } from '../../../services/getleads'

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  leaddetail : any[]
  
  constructor(readonly leads : GetLeadsService) {
    this.leads.GetLeads(this.leaddetail).subscribe((Response) =>
    {
      console.log(Response)
      this.leaddetail = [
        {
          name : Response.Name,
          email : Response.Email,
          phone : Response.ContactPhone
        }
      ]
    }
    )
   }

  ngOnInit(): void { 
   
  }

}
