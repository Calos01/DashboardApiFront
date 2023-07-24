import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Models/pedido';
import { PrincipalService } from 'src/app/principal.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  pedidos!:Pedido[];
  page:number=1;
  pagesize:number=3;
  // [{
  //   id:1,
  //   customer:{
  //     id:1,
  //     name:"Juanito",
  //     email:"Juanito434@hotmail.com"
  //   },
  //   amount:45,
  //   pedRealizado:new Date(2021,12,12),
  //   pedCompletado:new Date(2021,12,18),
  // },
  // {
  //   id:2,
  //   customer:{
  //     id:2,
  //     name:"Pedrito",
  //     email:"Juanito434@hotmail.com"
  //   },
  //   amount:45,
  //   pedRealizado:new Date(2021,12,12),
  //   pedCompletado:new Date(2021,12,18),
  // },
  // {
  //   id:3,
  //   customer:{
  //     id:3,
  //     name:"Pablito",
  //     email:"Juanito434@hotmail.com"
  //   },
  //   amount:45,
  //   pedRealizado:new Date(2021,12,12),
  //   pedCompletado:new Date(2021,12,18),
  // }]
  constructor(private _service:PrincipalService) {
  }
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this._service.getOrderPagination(this.page,this.pagesize).subscribe((res:any)=>{
      this.pedidos=res;
    })
  }

  clickPrev(){
    console.log("prev");
  }

  clickNext(){
    console.log("next");
  }
  
}
