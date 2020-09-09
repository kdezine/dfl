import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListTestComponent } from './list.component';


@NgModule({
  declarations: [ListTestComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
