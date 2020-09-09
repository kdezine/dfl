import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditIDoctorComponent } from './edit.component';


@NgModule({
  declarations: [EditIDoctorComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
