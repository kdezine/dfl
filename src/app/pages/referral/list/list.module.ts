import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListReferralComponent } from './list.component';


@NgModule({
  declarations: [ListReferralComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
