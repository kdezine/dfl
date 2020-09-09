import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddIdoctorComponent } from './add.component';


@NgModule({
  declarations: [AddIdoctorComponent],
  imports: [
    CommonModule,
    AddRoutingModule
  ]
})
export class AddModule { }
