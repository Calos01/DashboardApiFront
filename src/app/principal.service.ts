import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './Models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService{

  link="https://localhost:7027/api/Order/";
  url?:string;
  constructor(private http:HttpClient) {
    
   }

  getOrderPagination(page:number,pageSize:number){
    this.url=this.link+page+"/"+pageSize;
    return this.http.get<Pedido[]>(this.url);
  }
  
  getOrderEstados(){
    this.url=this.link+"TotalbyEstados";
    return this.http.get(this.url)
  }

  getOrderCustomers(n:number){
    this.url=this.link+"TotalbyCustomers/"+n;
    return this.http.get(this.url)
  }
}
