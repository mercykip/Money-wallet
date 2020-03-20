import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { Customer } from './customer';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public CUSTOMER_API = 'http://localhost:8061/view'; 
  public TRANSACTION_API = 'http://localhost:8061/viewTransaction'; 
  public CUSTOMER_EDIT_API='http://localhost:8061/customerUpdate';
  public CUSTOMER_DELETE_API='http://localhost:8061/customerDelete';
  constructor(private http:HttpClient) { }
  
      getCustomerList(): Observable<any> {  
        return this.http.get(this.CUSTOMER_API);  
      } 
      getTransactionList(): Observable<any> {  
        return this.http.get(this.TRANSACTION_API);  
      } 


    //getCustomer(cutomer_id: number): Observable<any> {  
      getCustomer(customer_id: number): Observable<any> {  
        return this.http.get(`${this.CUSTOMER_API}/${customer_id}`);   
      } 

      updateCustomer(customer_id: number,  value: any): Observable<any>{
        return this.http.put(`${this.CUSTOMER_EDIT_API}/${customer_id}`, value);   
      }

      deleteCustomer(customer_id:number): Observable<any>{
        return this.http.delete(`${this.CUSTOMER_DELETE_API}/${customer_id}`, { responseType: 'text' });

      }
}
