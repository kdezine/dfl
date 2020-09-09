import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListInstituteComponent } from './list.component';

const routes: Routes = [{
  path: '',
  component : ListInstituteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
