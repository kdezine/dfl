import { Component, OnInit } from "@angular/core";
import { leadsListService } from "../../../../services/leadslist";
import { DelLeadService } from "../../../../services/dellead";
// import { sweetalert2 } from '../../../../../node_modules/sweetalert2/dist'
@Component({
  selector: "app-listleads",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class LeadsListComponent implements OnInit {
  leadlist: any = [];
  leadid: any;
  tableview : boolean = true
  showdellead : boolean = false
  delleadid : any
  constructor(
    private leadslist: leadsListService,
    private dellead: DelLeadService
  ) {
    this.LeadsData();
  }

  LeadsData() {
    this.leadslist.GetLeads().subscribe((Response) => {
      this.leadlist = Response.data.Table;
    });
  }

  ngOnInit(): void {
    console.log(this.leadid)
    
  }
  showdelpop(id){
    debugger
    this.showdellead = true
    this.leadlist.LeadId = id

    let newid = this.leadlist.LeadId
    this.DeleteLead(newid)
  }
  DeleteLead(newid) {
    this.showdellead = true
    let param={
      "statusType":'3',
      "LeadId" : newid
    }
    this.dellead.DelLead(param).subscribe((Response) => {
      
      if(Response.Success == "success"){
        this.LeadsData();
      }
    });
  }
}
