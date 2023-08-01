import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './Models/pedido';
import { Server } from './Models/server';
import { serverPayload } from './Models/serverPayload';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService{

  link="https://localhost:7027/api/Order/";
  linkserver="https://localhost:7027/api/Server/";
  url?:string;
  constructor(private http:HttpClient) {
    
   }
   //APIS Orders
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

  //API Servers
  getServers(){
    this.url=this.linkserver+"GetServers/";
    return this.http.get<Server>(this.url);
  }

  putServer(id:number, payload:serverPayload){
    this.url=this.linkserver+"Server/"+id;
    return this.http.put(this.url, payload, { responseType: 'text' });
  }

}
