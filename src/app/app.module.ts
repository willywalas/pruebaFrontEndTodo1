import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import {} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './access/login/login.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './Producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { ListarCamisetasComponent } from './listar-camisetas/listar-camisetas.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { AgregarCuentaLoginComponent } from './agregar-cuenta-login/agregar-cuenta-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    LoginComponent,
    EditarComponent,
    AgregarComponent,
    ListarProductoComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarCamisetasComponent,
    DetalleProductoComponent,
    HomeComponent,
    AgregarCuentaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
