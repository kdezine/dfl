import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewInstituteComponent } from './view.component';

const routes: Routes = [{
  path : '',
  component : ViewInstituteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
