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
 // customerss:Customer[];
  displayedColumns: string[] = ['customer_id', 'customer_name', 'account_number', 'email','username','action','actionu','actiond'];
  constructor(private customerservice:CustomerService,private router: Router,
    private https:HttpClientModule) { }
  ngOnInit() {
    this.customerservice.getCustomerList().subscribe(data =>{  
      this.customers =data; 
      console.log(data);
      },
      error=>console.log(error));  
    //this.customerList();
  }
// customerList(){
//   this.customers=this.customerservice.getCustomerList();
//    this.customerservice.getCustomerList().subscribe(data =>{  
//      this.customers =data;  
//      console.log(data);
//      },
//     error=>console.log(error));  
// }
customerDetails(customer_id){
  this.router.navigate(['view',customer_id]);
//   this.customerservice.getCustomer(customer_id).subscribe(data =>{  
//   this.customers =data;  
//  console.log(data);

// })
console.log(customer_id);

  }
 customerEdit(customer_id){
    this.router.navigate(['customerUpdate',customer_id]);
  //   this.customerservice.getCustomer(customer_id).subscribe(data =>{  
  //   this.customers =data;  
  //  console.log(data);
  
  // })
  console.log(customer_id);
  
    }
    customerDelete(customer_id){
      this.customerservice.deleteCustomer(customer_id).
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
