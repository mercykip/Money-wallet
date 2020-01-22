import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from './customer';
@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error("Method not implemented.");
  }

//   transform(customerss:Customer[], searchTerm : string):Customer[]{
//     if(!customerss || !searchTerm){
//         return customerss;
//     }
//     return customerss.filter(customer=>customer.username.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
// }

}
