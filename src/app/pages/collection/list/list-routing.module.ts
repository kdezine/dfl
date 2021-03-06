import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
