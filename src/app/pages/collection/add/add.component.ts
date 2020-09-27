import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionAddService } from 'src/services/collection-add';
import  KTWizard  from "../../../../assets/js/components/wizard";
import { Router, ActivatedRoute } from '@angular/router';
import { ViewCollectionService } from "../../../../services/viewcollection";
@Component({
  selector: 'app-collection-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CollectionAddComponent implements OnInit  {
  @ViewChild('Kwizard', {static: true}) el: ElementRef;

  AddCollectionForm: FormGroup
  submit = false
  stepcount = 1
  rname : any
  rcname : any
  rphone : any
  remail : any
  radress : any
  rpincode : any
  rcity : any
  rstate : any
  rcountry : any
  id : any = -1
  colData : any
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private _viewcollection:ViewCollectionService,private formbuilder: FormBuilder, private httpcall: CollectionAddService) { }

  ngOnInit(): void {
    console.log("StepCount = "+this.stepcount)
    this.InitializeCollectionForm()
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id')
      
      if(this.id != -1  ){
        this.viewData();
      }
      
  })
  }
  viewData() {
    this._viewcollection.ViewCollection(this.id, "test").subscribe((res) => {
      this.colData = res.ResponseData[0];
      console.log(this.colData)
      debugger
      this.AddCollectionForm.setValue({
        ContactPersonName: this.colData.ContactPersonName,
        CenterName: this.colData.CenterName,
        ContactPhone: this.colData.ContactPhone,
        Email: this.colData.Email,
        Comments: this.colData.Comments,
        AddressLine1: this.colData.AddressLine1,
        AddressLine2: this.colData.AddressLine2,
        PinCode: this.colData.PinCode,
        City: this.colData.City,
        State: this.colData.State,
        Country: this.colData.Country,
        CollectionId: this.id,
        statusType: '2'
      })
    });
  }
  InitializeCollectionForm() {
    this.AddCollectionForm = this.formbuilder.group({
      ContactPersonName: ['', Validators.required],
      CenterName: ['', Validators.required],
      ContactPhone: ['', Validators.required],
      Email: ['', Validators.required],
      Comments: ['',],
      AddressLine1: ['', Validators.required],
      AddressLine2: [''],
      PinCode: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      CollectionId: ['-1'],
      statusType: ['1']
    })
  }
  get val() {
    return this.AddCollectionForm.controls
  }
  // cformsubmit() {
  //   this.submit = true
  //   debugger
  //   if (this.AddCollectionForm.invalid) {
  //     return;
  //   }

  //   // this.httpcall.AddCollection(this.AddCollectionForm.value).subscribe((res) => {
  //   //   console.log(res);
  //   // })
  // }
  cformsubmit(){
    this.submit = true
    if(
      this.AddCollectionForm.controls["ContactPersonName"].status == "INVALID" &&
      this.AddCollectionForm.controls["CenterName"].status == "INVALID" &&
      this.AddCollectionForm.controls["ContactPhone"].status == "INVALID" &&
      this.AddCollectionForm.controls["Email"].status == "INVALID"
      ){
        return;
        this.stepcount = 1
        }
        if(
          this.AddCollectionForm.controls["ContactPersonName"].status == "VALID" &&
        this.AddCollectionForm.controls["CenterName"].status == "VALID" &&
        this.AddCollectionForm.controls["ContactPhone"].status == "VALID" &&
        this.AddCollectionForm.controls["Email"].status == "VALID"
        ){
          this.stepcount = 2
        }
        if(
          this.AddCollectionForm.controls["AddressLine1"].status == "INVALID" &&
          this.AddCollectionForm.controls["PinCode"].status == "INVALID" &&
          this.AddCollectionForm.controls["City"].status == "INVALID" &&
          this.AddCollectionForm.controls["State"].status == "INVALID" &&
          this.AddCollectionForm.controls["Country"].status == "INVALID"
          ){
            return;
            this.stepcount = 2
            }
            if(
              this.AddCollectionForm.controls["AddressLine1"].status == "VALID" &&
            this.AddCollectionForm.controls["PinCode"].status == "VALID" &&
            this.AddCollectionForm.controls["City"].status == "VALID" &&
            this.AddCollectionForm.controls["State"].status == "VALID" &&
            this.AddCollectionForm.controls["Country"].status == "VALID"
            ){
              this.stepcount = 3
            }
            if(this.AddCollectionForm.valid){
              this.rname = this.AddCollectionForm.controls["ContactPersonName"].value
              this.rcname = this.AddCollectionForm.controls["CenterName"].value
              this.rphone = this.AddCollectionForm.controls["ContactPhone"].value
              this.remail = this.AddCollectionForm.controls["Email"].value
              this.radress = this.AddCollectionForm.controls["AddressLine1"].value
              this.rpincode = this.AddCollectionForm.controls["PinCode"].value
              this.rcity = this.AddCollectionForm.controls["City"].value
              this.rstate = this.AddCollectionForm.controls["State"].value
              this.rcountry = this.AddCollectionForm.controls["Country"].value
            }
      }

      finalsubmit(){
        console.log("Form submitted Successfully.")
        // debugger
        this.httpcall.AddCollection(this.AddCollectionForm.value).subscribe((res) =>{
          console.log(res);
          console.log("Collection form Submitted");
          this.stepcount = 5
        })
        
      }
}
