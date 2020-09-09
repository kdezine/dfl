import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddReferralComponent } from './add.component';


@NgModule({
  declarations: [AddReferralComponent],
  imports: [
    CommonModule,
    AddRoutingModule
  ]
})
export class AddReferralModule { }
