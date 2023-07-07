import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CanvasService } from 'src/app/canvas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit,AfterViewInit{
  tortaTiposId!:String;
  tortaSectoresId!:String
  constructor(private canvasService:CanvasService) {
    this.tortaTiposId="tortaTipos";
    this.tortaSectoresId="tortaSectores";
  }
  ngAfterViewInit(): void {
    
  }
  
  ngOnInit(): void {
    
  }
  
}
