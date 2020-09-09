import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListIDoctorComponent } from './list.component';


@NgModule({
  declarations: [ListIDoctorComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
