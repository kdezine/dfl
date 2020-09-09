import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableInsituteComponent } from './table.component';


@NgModule({
  declarations: [TableInsituteComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
