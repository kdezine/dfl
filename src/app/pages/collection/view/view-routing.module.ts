import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCollectionComponent } from './view.component';

const routes: Routes = [
  {path:'', component:ViewCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
