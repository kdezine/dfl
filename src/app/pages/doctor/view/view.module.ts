import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view.component'
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent,
      },
    ]),
    DashboardsModule,
  ],
})
export class ViewDoctorModule {}
