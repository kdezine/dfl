import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTestComponent } from './view.component';

const routes: Routes = [{
  path: '',
  component: ViewTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
