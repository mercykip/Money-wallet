import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';  
import { Customer } from '../customer';  
import { HttpClientModule } from '@angular/common/http';  
import { Observable,Subject } from "rxjs"; 
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer=new Customer;
  username:String;//search
  customers: Array<any>;//search
  customerlist:any;
  displayedColumns: string[] = ['customerId', 'customer_name', 'account_number', 'email','username','action','actionu','actiond'];
  constructor(private customerservice:CustomerService,private router: Router,
    private https:HttpClientModule) { }
  ngOnInit() {
    this.customerservice.getCustomerList().subscribe(data =>{  
      this.customers =data; 
      console.log(data);
      },
      error=>console.log(error));  
 
  }

customerDetails(customerId){
  this.router.navigate(['view',customerId]);
console.log(customerId);

  }
 customerEdit(customerId){
    this.router.navigate(['customerUpdate',customerId]);

  console.log(customerId);
  
    }
    customerDelete(customerId){
      this.customerservice.deleteCustomer(customerId).
      subscribe(data=>{
        console.log(data);
        this.ngOnInit();
      },
      error => console.log(error) );
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
