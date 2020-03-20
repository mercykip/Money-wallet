import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';  
import { Customer } from '../customer';  
import {CustomerListComponent } from '../customer-list/customer-list.component'
import { HttpClientModule } from '@angular/common/http'; 
//import { Router } from '@angular/router';
import { Observable,Subject } from "rxjs"; 
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers:Customer;
  //customers:Array<any>;
  customer_id:number;
  constructor(private service:CustomerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
   // this.customers=new Customer();
   // this.router.navigate(['view',this.customer_id]);
   this.customers=new Customer();
   this.customer_id = this.route.snapshot.params['customer_id'];
    this.service.getCustomer(this.customer_id).subscribe(data =>{  
    this.customers =data;  
   console.log(data);
  
  })

}
customerList(){
this.router.navigate(['view']);
// console.log(customer_id);

  }
}