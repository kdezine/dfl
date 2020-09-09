import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewReferralComponent } from './view.component';

const routes: Routes = [
  {
  path: '',
  component : ViewReferralComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
