import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateLeadService } from 'src/services/createlead';
import  KTWizard  from "../../../../assets/js/components/wizard";
import { CollectionListService } from "../../../../services/collectionlist";
import { AllTestService } from '../../../../services/alltests'
import { ViewLeadService } from '../../../../services/viewlead'
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.scss']
})
export class CreateLeadComponent implements OnInit {
  @ViewChild('Kwizard', {static: true}) el: ElementRef;
  CreateLeadForm : FormGroup
  submit = false
  stepcount = 1
  communication : any
  clist: any = []
  testlist: any = []
  dateToday: string = new Date().toDateString();
  id : any = -1
  leadData : any

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _viewlead:ViewLeadService,private formbuilder: FormBuilder, private httpcall: CreateLeadService, private collectionlist: CollectionListService, private alltests : AllTestService) { }

  ngOnInit(): void {
    console.log("Date"+this.dateToday) 
    this.IntForm()
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get("id");
      console.log(this.id)
      if(this.id != -1  ){
        this.viewData()
      }
  })
  }

  viewData() {
    // this._viewlead.ViewLead(this.id, "test").subscribe((res) => {
    //   this.leadData = res.data.Table[0];
    // });
    this._viewlead.ViewLead(this.id, "Test").subscribe((res) => {
      this.leadData = res.data.Table[0]
      this.CreateLeadForm.setValue({
        Name: this.leadData.Name,
        Email: this.leadData.Email,
        ContactPhone: this.leadData.ContactPhone,
        Confidential: this.leadData.Confidential,
        PreferredCommunication: this.leadData.PreferredCommunication,
        Source: this.leadData.Source,
        TestInterested: this.leadData.TestInterested,
        EstimatedValue: this.leadData.EstimatedValue,
        Discount: this.leadData.Discount,
        Location: this.leadData.Location,
        CollectionCenter: this.leadData.CollectionCenter,
        comments: this.leadData.comments,
        uploadfiles: this.leadData.uploadfiles,
        Addressline1: this.leadData.Addressline1,
        Addressline2: this.leadData.Addressline2,
        PinCode: this.leadData.PinCode,
        City: this.leadData.City,
        State: this.leadData.State,
        Country: this.leadData.Country,
        Events: this.leadData.Events,
        CreatedBy: this.leadData.CreatedBy,
        markAs: this.leadData.markAs,
        LeadId: this.id,
        dueDate : this.leadData.dueDate,
        leadType : this.leadData.leadType,
        leadstatus : this.leadData.leadstatus,
        referral : this.leadData.referral,
        images : this.leadData.images,
        allComments : this.leadData.allComments,
        statusType: '2'
      })
    });
  }
  IntForm() {
    this.collectionlist.GetCollections().subscribe((Response) => {
      this.clist = Response.data.Table
      
    })
    this.alltests.GetTests().subscribe((Response) =>
    {
      this.testlist = Response.data.Table
    })
    this.CreateLeadForm = this.formbuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      ContactPhone: ['', Validators.required],
      Confidential: [false],
      PreferredCommunication: ['', Validators.required],
      Source: ['', Validators.required],
      TestInterested: ['', Validators.required],
      EstimatedValue: ['', Validators.required],
      Discount: ['', Validators.required],
      Location: ['', Validators.required],
      CollectionCenter: ['', Validators.required],
      comments: [''],
      uploadfiles: [''],
      Addressline1: ['', Validators.required],
      Addressline2: [''],
      CreatedDate : [this.dateToday],
      PinCode: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      Events: [''],
      CreatedBy: [''],
      markAs: [''],
      dueDate: ['', Validators.required],
      leadType: [''],
      leadstatus: [''],
      referral: [''],
      allComments: [''],
      images: [''],
      LeadId: '-1',
      statusType: '1',
    })
  }
  prefercommun(value)
  {
    this.CreateLeadForm.value.PreferredCommunication=value;  
  }
  get val(){
    return  this.CreateLeadForm.controls
  }
  createlead(){
    // debugger
    this.submit = true

    if(
      this.CreateLeadForm.controls["Name"].status == "VALID" &&
      this.CreateLeadForm.controls["Email"].status == "VALID" &&
      this.CreateLeadForm.controls["ContactPhone"].status == "VALID" &&
      this.CreateLeadForm.controls["Confidential"].status == "VALID" &&
      this.CreateLeadForm.controls["Source"].status == "VALID" &&
      this.CreateLeadForm.controls["TestInterested"].status == "VALID" &&
      this.CreateLeadForm.controls["PreferredCommunication"].status == "VALID" &&
      this.CreateLeadForm.controls["EstimatedValue"].status == "VALID" &&
      this.CreateLeadForm.controls["Discount"].status == "VALID" &&
      this.CreateLeadForm.controls["Location"].status == "VALID" &&
      this.CreateLeadForm.controls["CollectionCenter"].status == "VALID" &&
      this.CreateLeadForm.controls["dueDate"].status == "VALID"
      ){
        this.stepcount = 2
     }else{
       return
     }
     
     if(
      this.CreateLeadForm.controls["Addressline1"].status == "VALID" &&
      this.CreateLeadForm.controls["PinCode"].status == "VALID" &&
      this.CreateLeadForm.controls["City"].status == "VALID" &&
      this.CreateLeadForm.controls["State"].status == "VALID" &&
      this.CreateLeadForm.controls["Country"].status == "VALID"
     ){
      this.stepcount = 3

     } else{
       return
     }
  }
  submitlead(){
    console.log("I am submitted the data")
    this.httpcall.CreateNewLead(this.CreateLeadForm.value).subscribe((res) =>{
      console.log("Lead Submitted")
    })
    this.stepcount = 4
  }

}
