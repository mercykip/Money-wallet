import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent } from './customer-list/customer-list.component'
import {CustomerDetailsComponent} from './customer-details/customer-details.component'
import {LoginComponent} from './login/login.component'
import {CustomerEditComponent} from './customer-edit/customer-edit.component'
import {TransactionListComponent} from './transaction-list/transaction-list.component'

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'view', component:   CustomerListComponent }, 
  { path: 'view/:customer_id', component:   CustomerDetailsComponent }, 
  // { path: 'add', component:   CustomerListComponent }, 
  { path: 'viewTransaction', component:  TransactionListComponent }, 
  { path: 'customerUpdate/:customer_id', component:   CustomerEditComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
