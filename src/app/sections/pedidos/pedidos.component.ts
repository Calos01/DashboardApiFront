import { Component } from '@angular/core';
import { Pedido } from 'src/app/Models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent{
  pedidos:Pedido[]=[{
    id:1,
    customer:{
      id:1,
      name:"Juanito",
      email:"Juanito434@hotmail.com"
    },
    amount:45,
    pedRealizado:new Date(2021,12,12),
    pedCompletado:new Date(2021,12,18),
  },
  {
    id:2,
    customer:{
      id:2,
      name:"Pedrito",
      email:"Juanito434@hotmail.com"
    },
    amount:45,
    pedRealizado:new Date(2021,12,12),
    pedCompletado:new Date(2021,12,18),
  },
  {
    id:3,
    customer:{
      id:3,
      name:"Pablito",
      email:"Juanito434@hotmail.com"
    },
    amount:45,
    pedRealizado:new Date(2021,12,12),
    pedCompletado:new Date(2021,12,18),
  }]
  constructor() {
  }
  
}
