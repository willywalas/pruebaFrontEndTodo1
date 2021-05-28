import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { AgregarCuentaLoginComponent } from './agregar-cuenta-login/agregar-cuenta-login.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { ListarCamisetasComponent } from './listar-camisetas/listar-camisetas.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AgregarProductoComponent } from './Producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'listarProductos',component:ListarProductoComponent},
  {path:'login',component:LoginComponent},
  {path:'editarPersona',component:EditarComponent},
  {path:'agregarPersona',component:AgregarComponent},
  {path:'agregarProducto',component:AgregarProductoComponent},
  {path:'editarProducto',component:EditarProductoComponent},
  {path:'detalleProducto',component:DetalleProductoComponent},
  {path:'camisetas',component:ListarCamisetasComponent},
  {path:'vasos',component:ListarCamisetasComponent},
  {path:'comics',component:ListarCamisetasComponent},
  {path:'juguetes',component:ListarCamisetasComponent},
  {path:'accesorios',component:ListarCamisetasComponent},
  {path:'nuevaCuenta',component:AgregarCuentaLoginComponent},
  {path:'',component:HomeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
