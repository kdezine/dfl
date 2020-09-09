import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListInstituteComponent } from './list.component';


@NgModule({
  declarations: [ListInstituteComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
