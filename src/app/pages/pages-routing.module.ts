import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'reports/timesheet',
        loadChildren: () =>
          import('./reports/timesheet/timesheet.module').then((m) => m.TimesheetModule),
      },
      {
        path: 'reports/lead',
        loadChildren: () => 
          import('./reports/lead/lead.module').then((m) => m.LeadModule),
      },
      {
        path: 'timesheet/doctor/table',
        loadChildren: () =>
          import('./timesheet/doctor/table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'timesheet/doctor/list',
        loadChildren: () =>
          import('./timesheet/doctor/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'timesheet/doctor/view',
        loadChildren: () =>
          import('./timesheet/doctor/view/view.module').then((m) => m.ViewModule),
      },
      {
        path: 'timesheet/doctor/edit',
        loadChildren: () =>
          import('./timesheet/doctor/edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: 'timesheet/doctor/add',
        loadChildren: () =>
          import('./timesheet/doctor/add/add.module').then((m) => m.AddModule),
      },
      {
        path: 'institute/table',
        loadChildren: () =>
          import('./timesheet/institute/table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'institute/list',
        loadChildren: () =>
          import('./timesheet/institute/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'institute/view',
        loadChildren: () =>
          import('./timesheet/institute/view/view.module').then((m) => m.ViewModule),
      },
      {
        path: 'institute/edit',
        loadChildren: () =>
          import('./timesheet/institute/edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: 'institute/add',
        loadChildren: () =>
          import('./timesheet/institute/add/add.module').then((m) => m.AddModule),
      },
      {
        path: 'timesheet/entries',
        loadChildren: () =>
          import('./timesheet/entries/entries.module').then((m) => m.EntriesModule),
      },
      {
        path: 'test-list',
        loadChildren: () =>
          import('./tests/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'test-view/:id/:name',
        loadChildren: () =>
          import('./tests/view/view.module').then((m) => m.ViewModule),
      },
      {
        path: 'create-test',
        loadChildren: () =>
          import('./tests/create/create.module').then((m) => m.CreateModule),
      },
      {
        path: 'test-edit',
        loadChildren: () =>
          import('./tests/edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: 'referral-edit',
        loadChildren: () =>
          import('./referral/edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: 'referral-add',
        loadChildren: () =>
          import('./referral/add/add.module').then((m) => m.AddReferralModule),
      },
      {
        path: 'referral-view',
        loadChildren: () =>
          import('./referral/view/view.module').then((m) => m.ViewModule),
      },
      {
        path: 'referral-list',
        loadChildren: () =>
          import('./referral/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'referral-table',
        loadChildren: () =>
          import('./referral/table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'collection-table',
        loadChildren: () =>
          import('./collection/table/table.module').then((m) => m.TableCollectionModule),
      },
      {
        path: 'collection-list',
        loadChildren: () =>
          import('./collection/list/list.module').then((m) => m.ListCollectionModule),
      },
      {
        path: 'collection-view/',
        loadChildren: () =>
          import('./collection/view/view.module').then((m) => m.ViewCollectionModule),
      },
      {
        path: 'collection-edit',
        loadChildren: () =>
          import('./collection/edit/edit.module').then((m) => m.EditCollectionModule),
      },
      {
        path: 'collection-add',
        loadChildren: () =>
          import('./collection/add/add.module').then((m) => m.AddCollectionModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'create-lead',
        loadChildren: () =>
          import('./create-lead/create-lead.module').then((m) => m.CreateLeadModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'users-table',
        loadChildren: () =>
          import('./users/users2.module').then((m) => m.UsersDModule),
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./users/adduser.module').then((m) => m.AddUserModule),
      },
      {
        path: 'add-doctor',
        loadChildren: () =>
          import('./doctor/add/add.module').then((m) => m.AddDoctorModule),
      },
      {
        path: 'doctors',
        loadChildren: () =>
          import('./doctor/view/view.module').then((m) => m.ViewDoctorModule),
      },
      {
        path: 'doctors-table',
        loadChildren: () => 
          import('./doctor/view/view2.module').then((m) => m.ViewDoctorTableModule),
      },
      {
        path: 'edit-user',
        loadChildren: () =>
          import('./users/edituser.module').then((m) => m.EditUserModule),
      },
      {
        path: 'edit-doctor',
        loadChildren: () =>
          import('./doctor/edit/edit.module').then((m) => m.EditDoctorModule),
      },
      {
        path: 'view-leads',
        loadChildren: () =>
          import('./leads/leads.module').then((m) => m.ALeadsModule),
      },
      {
        path: 'leads',
        loadChildren: () =>
          import('./leads/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'ecommerce',
        loadChildren: () =>
          import('../modules/e-commerce/e-commerce.module').then(
            (m) => m.ECommerceModule
          ),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('../modules/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: 'ngbootstrap',
        loadChildren: () =>
          import('../modules/ngbootstrap/ngbootstrap.module').then(
            (m) => m.NgbootstrapModule
          ),
      },
      {
        path: 'material',
        loadChildren: () =>
          import('../modules/material/material.module').then(
            (m) => m.MaterialModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
