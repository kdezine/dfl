import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {
  Form,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ViewLeadService } from "../../../../services/viewlead";
import { SaveLeadNoteService } from "../../../../services/saveleadnote";
@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})

export class ViewComponent implements OnInit {
  
  Savenoteform: FormGroup;
  submit = false;
  id: any;
  name: any;
  testData: any;
  datetime: string = new Date().toDateString();
  currentDate: string = new Date().toDateString();

  addeventpop : boolean = false
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _viewlead: ViewLeadService,
    private formbuilder: FormBuilder,
    private httpcall: SaveLeadNoteService
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.name = params.get("name");
      this.viewData();
      this.saveNote();
    });
  }

  saveNote() {
    this.Savenoteform = this.formbuilder.group({
      leadId: [this.id],
      leadName: [this.name],
      comment: ["", Validators.required],
      leadDatetime: [this.datetime],
    });
  }
  get val() {
    return this.Savenoteform.controls;
  }

  NoteSave() {
    this.submit = true;
    if (this.Savenoteform.controls["comment"].status == "VALID") {
      this.httpcall.SaveNote(this.Savenoteform.value).subscribe((res) => {
        console.log("Note Saved");
      });
    } else {
      return;
    }
  }
  dayprogress: any;
  viewData() {
    this._viewlead.ViewLead(this.id, this.name).subscribe((res) => {
      this.testData = res.data.Table[0];
    });
  }

}
