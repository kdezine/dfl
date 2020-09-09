import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableInsituteComponent } from './table.component';

const routes: Routes = [{
  path: '',
  component : TableInsituteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
