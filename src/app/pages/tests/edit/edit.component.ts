import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import  KTWizard  from "../../../../assets/js/components/wizard";
import { Router, ActivatedRoute } from "@angular/router";
import { testAddService } from 'src/services/addtest';
import { ViewTestService } from "../../../../services/viewtest";
@Component({
  selector: 'app-edittest',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditTestComponent implements OnInit {
  id : any
  name : any
  status : any
  tabcount : any = 1
  EditTestForm : FormGroup
  submit = false
  editData : any
  
  constructor(  private _Activatedroute: ActivatedRoute,
    private _router: Router,private formbuilder: FormBuilder, private httpcall: testAddService, private _testdetail: ViewTestService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.name = params.get("name");
     
    });
    this.TestForm()
    this.viewData()
  }
  viewData() {
    this._testdetail.ViewTest(this.id, this.name).subscribe((res) => {
      this.editData = res.ResponseData[0];
      console.log(this.editData)
    });
  }
  TestForm() {
    this.EditTestForm = this.formbuilder.group({
      TestName: ['', Validators.required],
      Price: ['', Validators.required],
      Tax: ['', Validators.required],
      FinalPrice: ['', Validators.required],
      Comments: ['', Validators.required],
      statusType: ['']
    })
  }
  get val(){
    return  this.EditTestForm.controls
  }
  edittest(){
    this.submit = true

    if(this.EditTestForm.invalid){
      return;
    }
    else if(this.EditTestForm.valid){
      console.log("I am submitted the data")
      // debugger
      this.httpcall.AddTest(this.EditTestForm.value).subscribe((res) =>{
        console.log(res);
        // if(res.Success == "Success"){
        // console.log("Data Submit")
        // }
      })
    }
  }
}
