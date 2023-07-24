import { Customer } from "./customer";

export interface Pedido{
    id:number,
    customer:Customer,
    amount:number,
    pedRealizado:Date,
    pedCompletado:Date
    status:boolean
}