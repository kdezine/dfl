import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditInstituteComponent } from './edit.component';


@NgModule({
  declarations: [EditInstituteComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
