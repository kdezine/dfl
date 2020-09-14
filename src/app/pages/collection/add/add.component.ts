import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionAddService } from 'src/services/collection-add';

@Component({
  selector: 'app-collection-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CollectionAddComponent implements OnInit {

  AddCollectionForm : FormGroup
  submit = false
  constructor(private formbuilder : FormBuilder, private httpcall:CollectionAddService) { }

  ngOnInit(): void {
    this.InitializeCollectionForm()
  }
  
  InitializeCollectionForm()
  {
    this.AddCollectionForm = this.formbuilder.group({
      ContactPersonName : ['', Validators.required]
    })
  }
  get val(){
    return  this.AddCollectionForm.controls
  }
  cformsubmit(){
    this.submit = true
debugger
    if(this.AddCollectionForm.invalid){
      return;
    }

    this.httpcall.AddCollection(this.AddCollectionForm.value).subscribe((res) =>{
      console.log(res);
    })
  }
}
