import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { CollectionTableComponent } from './table.component';


@NgModule({
  declarations: [CollectionTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableCollectionModule { }
