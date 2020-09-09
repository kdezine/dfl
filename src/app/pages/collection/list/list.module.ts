import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { CollectionListComponent } from './list.component';


@NgModule({
  declarations: [CollectionListComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListCollectionModule { }
