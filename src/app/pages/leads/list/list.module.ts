import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { LeadsListComponent } from './list.component';


@NgModule({
  declarations: [LeadsListComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
