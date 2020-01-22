import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';  
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
customer_id:number;
customer:Customer;
  constructor(private service:CustomerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.customer=new Customer();
   // this.router.navigate(['view',this.customer_id]);
   this.customer_id = this.route.snapshot.params['customer_id'];
    this.service.getCustomer(this.customer_id).subscribe(data =>{  
    this.customer =data;  
   console.log(data);
  
  })
  }
  editCustomer(){
    this.service.updateCustomer(this.customer_id, this.customer).
    subscribe(data=>console.log(data), error => console.log(error));
    this.customer=new Customer();

    this.gotoList();
    
    }

  
  onSubmit() {
    this.editCustomer();    
  }

  gotoList() {
    this.router.navigate(['/view']);
  }
  customerList(){
    this.router.navigate(['view']);
    // console.log(customer_id);
    
      }
}
