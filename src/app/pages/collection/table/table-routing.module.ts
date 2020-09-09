import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionTableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
