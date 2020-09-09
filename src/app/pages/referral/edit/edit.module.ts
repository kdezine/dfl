import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditReferralComponent } from './edit.component';


@NgModule({
  declarations: [EditReferralComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
