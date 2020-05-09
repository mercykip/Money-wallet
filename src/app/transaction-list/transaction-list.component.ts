import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';  
import { Customer } from '../customer';  

import { HttpClientModule } from '@angular/common/http';  
import { Observable,Subject } from "rxjs"; 
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  customer=new Customer ;
  username:String;//search  
  customers: Array<any>;//search
  displayedColumns: string[] = ['transactionId','customerId','Username','AccountBalance','Date','AmountSent','Charges','TransactionType'];
  constructor(private customerservice:CustomerService,private router: Router,
    private https:HttpClientModule) { }
    
  ngOnInit() {
    this.customerservice.getTransactionList().subscribe(data =>{  
      this.customers =data; 
      console.log(data);
      },
      error=>console.log(error));  
  }
  search(){
    this.customers=this.customers.filter(res=>{
      if(!this.customers || !this.username){
        this.customerservice.getCustomerList().subscribe(data =>{  
          this.customers =data;  
          console.log(data);
          }) 
    }
    else{
      error => console.log(error) ;
    }
      return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
    })
  }
  
}
