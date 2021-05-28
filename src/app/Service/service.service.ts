import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Persona} from '../Modelo/Persona';
import { Producto } from '../Modelo/Producto';
import { Venta } from '../Modelo/Venta';
import { TipoProducto } from '../Modelo/TipoProducto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:9194';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url+"/persona");
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/persona",persona);
  }
  getPersonaById(id:Number){
    return this.http.get<Persona>(this.Url+"/persona/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/persona/"+persona.id,persona);
  }

  eliminarPersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/persona/"+persona.id);
  }

  //mantenimiento de productos
  getProductos(){
    return this.http.get<Producto[]>(this.Url+"/producto");
  }
  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url+"/producto",producto);
  }
  getProductoById(id:Number){
    return this.http.get<Producto>(this.Url+"/producto/"+id);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/producto/"+producto.id,producto);
  }

  eliminarProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/producto/"+producto.id);
  }

  //listado de los menú
  getProductoByTipoProducto(id:Number){
    return this.http.get<Producto[]>(this.Url+"/producto/tipoProducto/"+id);
  }

  createVenta(venta:Venta){
    return this.http.post<Venta>(this.Url+"/venta",venta);
  }

  getTipoProductos(){
    return this.http.get<TipoProducto[]>(this.Url+"/tipoProducto");
  }

  login(persona:Persona){
    return this.http.post<Persona>(this.Url+"/persona/login",persona);
  }

}
