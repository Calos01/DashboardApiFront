import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../Models/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  @Input() serverInput!:Server;
  color!:string;
  nametoogle!:string;
  constructor() {
    
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
  }

  buttonToggle(online:boolean){
    console.log(online);
    this.serverInput.online=!online
    this.cambiarColor(!online)
  }


}
