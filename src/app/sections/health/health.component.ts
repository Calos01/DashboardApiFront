import { Component } from '@angular/core';
import { Server } from 'src/app/Models/server';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  servers:Server[]=[{
    id:1,
    name:"server23",
    online:true
  },
  {
    id:2,
    name:"server25",
    online:true
  },
  {
    id:3,
    name:"serverdsad",
    online:false
  }];
}
