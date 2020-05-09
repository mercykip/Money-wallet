import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customer-list/customer-list.component';
 import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatNativeDateModule,MatDatepickerModule, MatDialogModule, MatInputModule, MatTableModule,
  MatTableDataSource,MatMenuModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatRadioModule,MatListModule,MatIconModule, MatProgressSpinnerModule,MatSortModule,MatPaginatorModule
} from '@angular/material';
import { CustomerFilterPipe } from './customer-filter.pipe';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerFilterPipe,
    TransactionListComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
   
   // HttpClient,
    FormsModule,
    //HttpClient,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatNativeDateModule,FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [CustomerListComponent,CustomerEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

