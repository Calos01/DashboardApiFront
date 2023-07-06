import { Component, OnInit } from '@angular/core';
import { Chart,registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph-barras',
  templateUrl: './graph-barras.component.html',
  styleUrls: ['./graph-barras.component.css']
})
export class GraphBarrasComponent implements OnInit{


constructor() {
  
}
ngOnInit(): void {
  this.renderGrafico();
  this.renderGraficos();
  
}
renderGrafico(){
  new Chart("graphics", {
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
renderGraficos(){
  new Chart("graphicses", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
 
}
