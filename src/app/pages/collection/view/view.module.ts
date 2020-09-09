import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewCollectionComponent } from './view.component';


@NgModule({
  declarations: [ViewCollectionComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewCollectionModule { }
