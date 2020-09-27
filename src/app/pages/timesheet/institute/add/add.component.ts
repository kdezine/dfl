import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import  KTWizard  from "../../../../../assets/js/components/wizard";
import { InstituteAddService } from 'src/services/addinstitute';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewInstituteService } from "../../../../../services/viewinstitute";
@Component({
  selector: 'app-addinstitute',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddInstituteComponent implements OnInit {
  stepcount = 1
  AddInsForm : FormGroup
  submit = false
  id : any = -1
  insData : any
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private _viewcollection:ViewInstituteService,private formbuilder: FormBuilder, private httpcall: InstituteAddService) { }

  ngOnInit(): void {
    this.AddIForm()
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id')
      
      if(this.id != -1  ){
        this.ViewData();
      }
      
  })
  }
  ViewData() {
    this._viewcollection.ViewInstitutet(this.id, "test").subscribe((res) => {
      this.insData = res.ResponseData[0];
      console.log(this.insData)

      this.AddInsForm.setValue({
        InstitutionName: this.insData.InstitutionName,
        CompanyWebsite: this.insData.CompanyWebsite,
        InstitutionInfo: this.insData.InstitutionInfo,
        DepartmentName: this.insData.DepartmentName,
        AssignedDoctor: this.insData.AssignedDoctor,
        AddressLine1: this.insData.AddressLine1,
        AddressLine2: this.insData.AddressLine2,
        PinCode: this.insData.PinCode,
        City: this.insData.City,
        State: this.insData.State,
        Country: this.insData.Country,
        Id: this.id,
        statusType: '2'
      })
    });
  }
  AddIForm(){
    this.AddInsForm = this.formbuilder.group({
      InstitutionName: ['', Validators.required],
      CompanyWebsite: ['', Validators.required],
      InstitutionInfo: ['', Validators.required],
      DepartmentName: ['', Validators.required],
      AssignedDoctor: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      AddressLine2: [''],
      PinCode: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      Id: ['-1'],
      statusType: ['1']
    })
  }
  get val() {
    return this.AddInsForm.controls
  }
  addinstitute(){
    this.submit = true

    if(
      this.AddInsForm.controls["InstitutionName"].status == "INVALID" &&
      this.AddInsForm.controls["CompanyWebsite"].status == "INVALID" &&
      this.AddInsForm.controls["InstitutionInfo"].status == "INVALID"
    ){
      return;
    }
    else if(
      this.AddInsForm.controls["InstitutionName"].status == "VALID" &&
      this.AddInsForm.controls["CompanyWebsite"].status == "VALID" &&
      this.AddInsForm.controls["InstitutionInfo"].status == "VALID"
    ){
      this.stepcount = 2
    }
    if(
      this.AddInsForm.controls["DepartmentName"].status == "INVALID" &&
      this.AddInsForm.controls["AssignedDoctor"].status == "INVALID"
    ){
      return;
    }
    else if(
      this.AddInsForm.controls["DepartmentName"].status == "VALID" &&
      this.AddInsForm.controls["CompanyWebsite"].status == "VALID"
    ){
      this.stepcount = 3
    }
    if(
      this.AddInsForm.controls["AddressLine1"].status == "INVALID" &&
      this.AddInsForm.controls["PinCode"].status == "INVALID" &&
      this.AddInsForm.controls["City"].status == "INVALID" &&
      this.AddInsForm.controls["State"].status == "INVALID" &&
      this.AddInsForm.controls["Country"].status == "INVALID"
    ){
      return;
    }
    else if(
      this.AddInsForm.controls["AddressLine1"].status == "VALID" &&
      this.AddInsForm.controls["PinCode"].status == "VALID" &&
      this.AddInsForm.controls["City"].status == "VALID" &&
      this.AddInsForm.controls["State"].status == "VALID" &&
      this.AddInsForm.controls["Country"].status == "VALID"
    ){
      this.stepcount = 4
    }
  }
  submitdata(){
    console.log("I am submitted the data")
    this.httpcall.AddCINstitute(this.AddInsForm.value).subscribe((res) =>{
      console.log("Lead Submitted")
    })
    this.stepcount = 5
  }
}
