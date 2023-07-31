import { AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import { Chart,registerables} from 'chart.js';
import { PrincipalService } from 'src/app/principal.service';
import { forkJoin } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-graph-tortas',
  templateUrl: './graph-tortas.component.html',
  styleUrls: ['./graph-tortas.component.css']
})
export class GraphTortasComponent implements OnInit,AfterViewInit{
chart1!:any;
chart2!:any;
@Input() canvasId!:String;
dataOrderEstados:any[]=[];
dataOrderCustomers:any[]=[];

constructor(private _service:PrincipalService) {
  
}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.getDataAndRenderGrafico();
    this.resizeChart();
  }
  renderGrafico(){
   
    console.log(this.canvasId);
    
    this.chart1=new Chart("tortaTipos",{
      type: 'doughnut',
      data: {
        labels: 
          this.dataOrderEstados.map((res:any)=>res.estados)
        ,
        datasets: [{
          label: 'My First Dataset',
          data: this.dataOrderEstados.map((res:any)=>res.total) 
        }]
      }
    });

    this.chart2=new Chart("tortaSectores",{
      type: 'doughnut',
      data: {
        labels: this.dataOrderCustomers.map((f:any)=>f.names),
        datasets: [{
          label: 'My First Dataset',
          data: this.dataOrderCustomers.map((f:any)=>f.total) 
        }]
      }
    });
    // console.log(this.canvasId);
  }
 
  //Nos sirve para que no se pierda los graficos al achicar y agrandar la pantalla
  resizeChart() {
    if (this.chart1 && this.chart2) {
      this.chart1.resize();
      this.chart2.resize();
    }
  }
  //Nos sirve para que no se pierda los graficos al achicar y agrandar la pantalla
  @HostListener('window:resize')
  onWindowResize() {
    this.resizeChart();
  }

  //JUNTANDO DOS _service con forkjoin para q se ejecuten juntos antes del renderGrafico
  getDataAndRenderGrafico() {
    forkJoin([
      this._service.getOrderEstados(),
      this._service.getOrderCustomers(3)
    ]).subscribe(
      ([orderEstadosData, orderCustomersData]) => {
        //RARAZO orderEstadosData deberian ser Arrays pero sale como objeto en errorlens 
        //Solucion poner Object.values
        this.dataOrderEstados = Object.values(orderEstadosData);
        this.dataOrderCustomers = Object.values(orderCustomersData);
        //RARAZO al hacer clg votan lo mismo
        // console.log(orderEstadosData);
        // console.log(this.dataOrderEstados);
        this.renderGrafico();
      }
    );
  }


}
