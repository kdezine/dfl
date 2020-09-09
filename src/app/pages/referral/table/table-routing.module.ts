import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableReferralComponent } from './table.component';

const routes: Routes = [{
  path: '',
  component: TableReferralComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
