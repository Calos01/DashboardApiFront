import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/Models/server';
import { PrincipalService } from 'src/app/principal.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  
  servers!:Server[];
 
  // [{
  //   id:1,
  //   name:"server23",
  //   online:true
  // },
  // {
  //   id:2,
  //   name:"server25",
  //   online:true
  // },
  // {
  //   id:3,
  //   name:"serverdsad",
  //   online:false
  // },
  // {
  //   id:4,
  //   name:"serr4re",
  //   online:true
  // },
  // {
  //   id:5,
  //   name:"seewqe",
  //   online:false
  // }];

  constructor(private _service:PrincipalService) {
    
  }
  
  ngOnInit(): void {
   this.getServers();
  }

  getServers(){
    this._service.getServers().subscribe((res:any)=>{
      this.servers=res;
      console.log(this.servers);
    })
  }
}
