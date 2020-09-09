import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.scss']
})
export class CreateLeadComponent implements OnInit {
  CreateLeadForm : FormGroup
  submitted = false
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.IntForm()
  }
  IntForm() {
    this.CreateLeadForm = this.formbuilder.group({
      projectname : ['', Validators.required],
      email : ['', Validators.email],
      phone : ['', Validators.required]
    })
  }

  get val(){
    return  this.CreateLeadForm.controls
  }
  createlead(){
    this.submitted = true

    if(this.CreateLeadForm.invalid){
      return;
    }
  }

}
