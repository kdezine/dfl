import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionAddService } from 'src/services/collection-add';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm : FormGroup
  submit = false
  fps : boolean = false
  constructor(private formbuilder : FormBuilder, private httpcall:CollectionAddService) { }

  ngOnInit(): void {
    this.fLogin()
  }

  fLogin(){
    this.LoginForm = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  get val(){
    return  this.LoginForm.controls
  }
  login(){
    this.submit = true

    if(this.LoginForm.invalid){
      return;
    }

    this.httpcall.AddCollection(this.LoginForm.value).subscribe((res) =>{
      console.log(res);
    })
  }
}
