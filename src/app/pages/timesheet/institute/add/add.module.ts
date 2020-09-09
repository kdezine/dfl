import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddInstituteComponent } from './add.component';


@NgModule({
  declarations: [AddInstituteComponent],
  imports: [
    CommonModule,
    AddRoutingModule
  ]
})
export class AddModule { }
