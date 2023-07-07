import { AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { Chart,registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph-tortas',
  templateUrl: './graph-tortas.component.html',
  styleUrls: ['./graph-tortas.component.css']
})
export class GraphTortasComponent implements OnInit,AfterViewInit{
chart!:any;
constructor() {
  
}
  ngOnInit(): void {
    this.renderGrafico();
  }
  ngAfterViewInit(): void {
    this.resizeChart();
  }
  renderGrafico(){
   this.chart=new Chart("torta",{
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
}
