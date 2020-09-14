import { Component, OnInit } from '@angular/core'
import { GetInstituteService } from '../../../../../services/getinstitutes'

@Component({
  selector: 'app-listinstitute',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListInstituteComponent implements OnInit {
  inslist : any = []
  tableview : boolean = false
  constructor(private leadslist : GetInstituteService) {
    this.InsData()
   }
  ngOnInit(): void {
  }
  InsData()
  {
    
    this.leadslist.GetInstitutes().subscribe((Response) =>
    {
      this.inslist = Response.ResponseData
    })
  }

}
