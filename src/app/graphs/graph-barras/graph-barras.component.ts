import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Chart,registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph-barras',
  templateUrl: './graph-barras.component.html',
  styleUrls: ['./graph-barras.component.css']
})
export class GraphBarrasComponent implements OnInit,AfterViewInit{

chart!:Chart;
constructor() {
  
}
  ngAfterViewInit(): void {
    this.resizeChart();
  }
ngOnInit(): void {
  this.renderGrafico();
}
renderGrafico(){
  this.chart= new Chart("graphics", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      },
      {
        label: '# of Votes',
        data: [22, 37, 13, 15, 10, 5],
        borderWidth: 1
      }]
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

}
