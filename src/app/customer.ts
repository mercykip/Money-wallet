export class Customer {
    customerId:number;
    customerName:String;
    address:String;
    PhoneNumber:number;
    username:String;
    nationalId:number;
    accountNumber:String;
    email:String;
    pin:number;
}
class Transaction {
    transactionId:number;
    customerId:number;
    username:String;
    date:String;
    accountBalance:number;
    amount:number;
    charges:number;
    trasactionType:String;
}
