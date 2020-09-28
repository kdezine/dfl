import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ViewTestService } from "../../../../services/viewtest";

@Component({
  selector: "app-viewtest",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewTestComponent implements OnInit {
  tid: any;
  tname: any;
  testData: any;
  tabcount = 2
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _testdetail: ViewTestService
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.tid = params.get("id");
      this.tname = params.get("name");
      this.viewData();
    });
  }

  viewData() {
    this._testdetail.ViewTest(this.tid, this.tname).subscribe((res) => {
      this.testData = res.data.Table[0];
    });
  }
}
