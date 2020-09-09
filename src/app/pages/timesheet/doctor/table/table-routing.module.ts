import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableIDoctorComponent } from './table.component';

const routes: Routes = [{
  path: '',
  component : TableIDoctorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
