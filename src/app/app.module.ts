import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationComponent } from './views/organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,

    RouterModule.forRoot(AppRoutingModule, {useHash: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
