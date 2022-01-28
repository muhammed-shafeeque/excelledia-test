import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OrganizationComponent } from './views/organization/organization.component';

export const AppRoutingModule: Routes = [

  {
    path: "",
    component: DashboardComponent
  },
  {
    path : 'organization',
    component : OrganizationComponent
  }
];

