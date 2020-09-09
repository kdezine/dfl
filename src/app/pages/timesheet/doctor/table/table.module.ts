import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableIDoctorComponent } from './table.component';


@NgModule({
  declarations: [TableIDoctorComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
