import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { Customer } from './customer';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public CUSTOMER_API = 'http://localhost:8066/view'; 
  constructor(private http:HttpClient) { }
  
  getCustomerList(): Observable<any> {  
    return this.http.get(this.CUSTOMER_API);  
  } 
    //getCustomer(cutomer_id: number): Observable<any> {  
      getCustomer(customer_id: number): Observable<any> {  
        return this.http.get(`${this.CUSTOMER_API}/${customer_id}`);   
      } 
}
