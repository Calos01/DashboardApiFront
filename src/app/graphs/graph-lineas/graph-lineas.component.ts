import { Component, HostListener, OnInit } from '@angular/core';
import { Chart,registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph-lineas',
  templateUrl: './graph-lineas.component.html',
  styleUrls: ['./graph-lineas.component.css']
})
export class GraphLineasComponent implements OnInit{
  chart1!:any;
  constructor() {
    
  }
  ngOnInit(): void {
    this.renderlineas();
  }
  renderlineas(){
    this.chart1= new Chart("lineas",{
      type: 'line',
      data: {
        labels: ['Enero','February','March','April','May','June','July','August'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40,55],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor:'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'My First Dataset',
          data: [25, 79, 40, 61, 46, 35, 30,59],
          fill: false,
          borderColor: 'rgb(150, 150, 150)',
          backgroundColor: 'rgb(150, 150, 150)',
          tension: 0.1
        }
      ],     
      }
    });
  }
  
  //Nos sirve para que no se pierda los graficos al achicar y agrandar la pantalla
  resizeChart() {
    if (this.chart1) {
      this.chart1.resize();
    }
  }
  //Nos sirve para que no se pierda los graficos al achicar y agrandar la pantalla
  @HostListener('window:resize')
  onWindowResize() {
    this.resizeChart();
  }
}
