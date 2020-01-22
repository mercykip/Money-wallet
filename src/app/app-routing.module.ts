import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent } from './customer-list/customer-list.component'
import {CustomerDetailsComponent} from './customer-details/customer-details.component'
import {CustomerEditComponent} from './customer-edit/customer-edit.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'view', component:   CustomerListComponent }, 
  { path: 'view/:customer_id', component:   CustomerDetailsComponent }, 
  { path: 'customerUpdate/:customer_id', component:   CustomerEditComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
