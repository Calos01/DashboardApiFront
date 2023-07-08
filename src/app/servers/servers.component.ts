import { Component, Input } from '@angular/core';
import { Server } from '../Models/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  @Input() serverInput!:Server;
}
