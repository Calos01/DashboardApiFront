import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../Models/server';
import { PrincipalService } from '../principal.service';
import { serverPayload } from '../Models/serverPayload';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  @Input() serverInput!:Server;
  servpayload:serverPayload={
    id:0,
    payload:""
  };
  color!:string;
  nametoogle!:string;
  constructor(private _service:PrincipalService) {
    
  }
  ngOnInit(): void {
    this.cambiarColor(this.serverInput.online)
  }
  
  cambiarColor(online:boolean){
    if(online){
      this.color="green";
      this.nametoogle="true"
    }else{
      this.color="red";
      this.nametoogle="false" 
    }
    this.cambiapayload();
    this.modifyServer();
  }
  cambiapayload(){
    if(this.serverInput.online){
      this.servpayload.payload="activo"
    }else{
      this.servpayload.payload="inactivo"
    }
  }

  buttonToggle(online:boolean){
    console.log(online);
    this.serverInput.online=!online
    this.cambiarColor(!online)
  }
  modifyServer(){
    this._service.putServer(this.serverInput.id,this.servpayload).subscribe((res:string)=>{
      console.log(res);
    })
  }


}
