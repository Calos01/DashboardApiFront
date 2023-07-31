import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
//para formatear fecha install date-fns
import {format, parseISO, getMonth} from 'date-fns'
import { Chart,registerables} from 'chart.js';
import { PrincipalService } from 'src/app/principal.service';
Chart.register(...registerables);

@Component({
  selector: 'app-graph-barras',
  templateUrl: './graph-barras.component.html',
  styleUrls: ['./graph-barras.component.css']
})
export class GraphBarrasComponent implements OnInit,AfterViewInit{

chart!:Chart;
datameses:string[]=[];
datatotales:number[]=[];
constructor(private _service:PrincipalService) {
  
}
  ngAfterViewInit(): void {
    this.resizeChart();
  }
ngOnInit(): void {
  this.getOrders();
}
renderGrafico(){
  
  this.chart= new Chart("graphics", {
    type: 'bar',
    data: {
      labels: this.datameses,
      datasets: [{
        label: 'Ventas Totales',
        data: this.datatotales,
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//Nos sirve para que no se pierda los graficos al achicar y agrandar la pantalla
resizeChart() {
  if (this.chart) {
    this.chart.resize();
  }
}
//Nos sirve para que no se pierda los graficos al achicar y agrandar la pantalla
@HostListener('window:resize')
onWindowResize() {
  this.resizeChart();
}
//CrearGrafico barras por mes
getOrders(){
  this._service.getOrderPagination(1,8).subscribe((res:any)=>{
    let datass=res;
    // this.datameses=datass.map((f:any)=>{
    //   const dateformat= parseISO(f.pedRealizado);
    //   return format(dateformat,"dd-MM-yy")
    // })
    
    // let datos=datass.map((d:any)=>d.total)
    // this.datatotales=datos;

    datass.forEach((e:any) => {
      const formatomes=parseISO(e.pedRealizado);
      const mes=format(formatomes,"MMMM");
      const total=e.total;

      const indexMes=this.datameses.indexOf(mes);
      if(indexMes===-1){
        this.datameses.push(mes);
        this.datatotales.push(total);
      }else{
        this.datatotales[indexMes] +=total;
      }
    });
    // console.log(this.datameses);
    // console.log(this.datatotales);

    this.renderGrafico();
  })
}

}
