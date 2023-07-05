import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './sections/ventas/ventas.component';
import { PedidosComponent } from './sections/pedidos/pedidos.component';
import { HealthComponent } from './sections/health/health.component';

const routes: Routes = [
  {path:'ventas',component:VentasComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'health',component:HealthComponent},
  {path:'', redirectTo:'/ventas', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
