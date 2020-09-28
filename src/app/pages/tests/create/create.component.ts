import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import  KTWizard  from "../../../../assets/js/components/wizard";
import { testAddService } from 'src/services/addtest';
import { Router, ActivatedRoute } from "@angular/router";
import { ViewTestService } from "../../../../services/viewtest";
@Component({
  selector: 'app-createtest',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateTestComponent implements OnInit {
  stepcount = 1
  @ViewChild('Kwizard', {static: true}) el: ElementRef;
  CreateTestForm : FormGroup
  submit = false
  rname : any
  rprice : any
  rtax : any
  rfprice : any
  rcomment : any
  id : any = -1
  testData : any
  constructor( private _testdetail: ViewTestService,private _Activatedroute: ActivatedRoute,
    private _router: Router,private formbuilder: FormBuilder, private httpcall: testAddService) { }

  
  ngOnInit(): void {
    this.TestForm()
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      console.log(this.id)
      if(this.id != -1  ){
        this.GetTestData()
      }
    });
    

  }
  GetTestData(){
    this._testdetail.ViewTest(this.id, "Test").subscribe((res) => {
      this.testData = res.data.Table[0];
      this.CreateTestForm.setValue({
        TestName: this.testData.TestName,
        Price: this.testData.Price,
        Tax: this.testData.Tax,
        FinalPrice: this.testData.FinalPrice,
        Comments: this.testData.Comments,
        TestId: this.id,
        statusType: '2'        
      })
    });
  }
  TestForm() {
    this.CreateTestForm = this.formbuilder.group({
      TestName: ['', Validators.required],
      Price: ['', Validators.required],
      Tax: ['', Validators.required],
      FinalPrice: ['', Validators.required],
      Comments: ['', Validators.required],
      TestId: ['-1'],
      statusType: '1'
    })
  }

  get val(){
    return  this.CreateTestForm.controls
  }
  createtest(){
    this.submit = true

    if(this.CreateTestForm.invalid){
      return;
    }
    else if(this.CreateTestForm.valid){
      this.stepcount = 2
      this.rname = this.CreateTestForm.controls["TestName"].value
      this.rprice = this.CreateTestForm.controls["Price"].value
      this.rtax = this.CreateTestForm.controls["Tax"].value
      this.rfprice = this.CreateTestForm.controls["FinalPrice"].value
      this.rcomment = this.CreateTestForm.controls["Comments"].value
    }
  }
  finalsubmit(){
    console.log("I am submitted the data")
    // debugger
    this.httpcall.AddTest(this.CreateTestForm.value).subscribe((res) =>{
      console.log(res);
      
    })
    this.stepcount = 5
    
  }
  // createtest(){
  //     this.submit = true
  //     const wizard = new KTWizard(this.el.nativeElement, {
  //       startStep: 1,
  //       clickableSteps: false
  //     });
     
  //     wizard.on("beforeNext", wizardObj => {
  //       if (wizardObj.currentStep === 1) {
  //         if (this.CreateTestForm.invalid) {
  //           // debugger;
  //           wizardObj.stop();
            
  //         }
  //       }
  //     });
   
  

  //     // wizard.goNext();
     
  //     if (this.CreateTestForm.controls["TestName"].status == "INVALID" ||
  //       this.CreateTestForm.controls["Price"].status == "INVALID" ||
  //       this.CreateTestForm.controls["Tax"].status == "INVALID" ||
  //       this.CreateTestForm.controls["FinalPrice"].status == "INVALID" ||
  //       this.CreateTestForm.controls["Comments"].status == "INVALID" 
  //       ) {
  //       return;
  //     }
  //     else{
  //       console.log("success")
  //     }
  //   }
}
