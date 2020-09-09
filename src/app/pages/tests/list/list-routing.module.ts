import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTestComponent } from './list.component';

const routes: Routes = [{
  path: '',
  component: ListTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
