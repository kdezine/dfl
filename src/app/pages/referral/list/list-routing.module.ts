import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReferralComponent } from './list.component';

const routes: Routes = [{
  path:'',
  component: ListReferralComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
