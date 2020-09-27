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
  constructor(
    private leadslist: leadsListService,
    private dellead: DelLeadService
  ) {
    this.LeadsData();
  }

  LeadsData() {
    this.leadslist.GetLeads().subscribe((Response) => {
      this.leadlist = Response.ResponseData;
    });
  }

  ngOnInit(): void {
    console.log(this.leadid);
  }
  DeleteLead(item) {
    let param={
      "statusType":'3',
      "LeadId" : item.LeadId
    }
    this.dellead.DelLead(param).subscribe((Response) => {
      console.log(this.leadid);

      if(Response.Success == "success"){
        this.LeadsData();
      }
      else{
        console.log("Something is not working")
      }

      
    });
  }
}
