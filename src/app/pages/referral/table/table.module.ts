import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableReferralComponent } from './table.component';


@NgModule({
  declarations: [TableReferralComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
