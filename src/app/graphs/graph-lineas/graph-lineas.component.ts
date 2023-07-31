import { Component, HostListener, OnInit } from '@angular/core';
import { Chart,registerables} from 'chart.js';
import { PrincipalService } from 'src/app/principal.service';
Chart.register(...registerables);

@Component({
  selector: 'app-graph-lineas',
  templateUrl: './graph-lineas.component.html',
  styleUrls: ['./graph-lineas.component.css']
})
export class GraphLineasComponent implements OnInit{
  chart1!:any;
  datalabelsfecha!:string[];
  datalabelcustomer!:string[];
  datatotales!:number[];
  //para almacenar los valores totales por fecha y customer
  dataByDateAndCustomer:{[date:string]:{[customerId:number]:number}}={};
  constructor(private _service:PrincipalService) {
    
  }
  ngOnInit(): void {
    this.getOrdersCustomerDate();
  }
  renderlineas(dates:string[], datasetstotal:any[]){
    this.chart1= new Chart("lineas",{
      type: 'line',
      data: {
        labels: dates,
        datasets: datasetstotal,     
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

  //Ventas suma totales por dia de cada customer GOZU!!
  getOrdersCustomerDate(){
    this._service.getOrderPagination(1,20).subscribe((res:any)=>{
      res.forEach((order: any) => {
        const date = order.pedRealizado.split('T')[0];
        const customerName = order.customer.name;
        const total = order.total;
        //Buscara por fecha y customer
        if (!this.dataByDateAndCustomer[date]) {
          this.dataByDateAndCustomer[date] = {};
        }
        //si no existe le agregamos total 
        this.dataByDateAndCustomer[date][customerName] = (this.dataByDateAndCustomer[date][customerName] || 0) + total;
      });
      const dates = Object.keys(this.dataByDateAndCustomer);
      const customers = new Set<string>(); // Utilizamos un conjunto para almacenar todos los nombres de clientes únicos

      // Recorrer todas las fechas y añadir los nombres de clientes al conjunto
      dates.forEach(date => {
        Object.keys(this.dataByDateAndCustomer[date]).forEach(customerName => {
          customers.add(customerName);
        });
      });
      
      const datasets = Array.from(customers).map((customerName:any) => ({
      label: `Customer ${customerName}`,
      data: dates.map((date) => this.dataByDateAndCustomer[date][customerName] || 0),
      fill: false,
      borderColor: this.getRandomColor(),
      borderWidth: 2,
      }));
      this.renderlineas(dates,datasets);
    });
    
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
