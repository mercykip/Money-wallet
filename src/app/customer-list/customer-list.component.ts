import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';  
import { Customer } from '../customer';  
//import { HttpClient } from '@angular/common/http';
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
  customers: Array<any>;
  constructor(private customerservice:CustomerService,private router: Router,
    private https:HttpClientModule) { }

  ngOnInit() {
    this.customerList();
  }
customerList(){
  this.customerservice.getCustomerList().subscribe(data =>{  
    this.customers =data;  
    console.log(data);
    },
    error=>console.log(error)
    );  
}
customerDetails(customer_id){
  this.router.navigate(['view',customer_id]);
  this.customerservice.getCustomer(customer_id).subscribe(data =>{  
  this.customers =data;  
 console.log(data);

})
console.log(customer_id);

  }

}
