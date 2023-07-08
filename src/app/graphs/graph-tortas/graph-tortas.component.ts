import { AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import { Chart,registerables} from 'chart.js';
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

constructor() {
  
}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.renderGrafico();
    this.resizeChart();
  }
  renderGrafico(){
   
    console.log(this.canvasId);
    
    this.chart1=new Chart("tortaTipos",{
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ]
        }]
      }
    });

    this.chart2=new Chart("tortaSectores",{
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ]
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
}
