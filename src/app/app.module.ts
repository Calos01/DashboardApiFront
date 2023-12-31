import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VentasComponent } from './sections/ventas/ventas.component';
import { PedidosComponent } from './sections/pedidos/pedidos.component';
import { HealthComponent } from './sections/health/health.component';
import { GraphLineasComponent } from './graphs/graph-lineas/graph-lineas.component';
import { GraphBarrasComponent } from './graphs/graph-barras/graph-barras.component';
import { GraphTortasComponent } from './graphs/graph-tortas/graph-tortas.component';
import { ServersComponent } from './servers/servers.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ArregloComponent } from './arreglo/arreglo.component';
import { PruebasComponent } from './pruebas/pruebas.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    VentasComponent,
    PedidosComponent,
    HealthComponent,
    GraphLineasComponent,
    GraphBarrasComponent,
    GraphTortasComponent,
    ServersComponent,
    PaginatorComponent,
    FormularioComponent,
    PruebaComponent,
    ArregloComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
