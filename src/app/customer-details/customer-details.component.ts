import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';  
import { Customer } from '../customer';  
import {CustomerListComponent } from '../customer-list/customer-list.component'
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
@Input() customer: Customer;
  constructor(private service:CustomerService,private list:CustomerListComponent) { }

  ngOnInit() {
  }

}
