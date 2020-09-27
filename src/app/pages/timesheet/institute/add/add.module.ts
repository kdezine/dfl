import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddRoutingModule } from './add-routing.module';
import { AddInstituteComponent } from './add.component';


@NgModule({
  declarations: [AddInstituteComponent],
  imports: [
    CommonModule,
    AddRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class AddModule { }
