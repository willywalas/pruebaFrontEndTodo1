import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos: Producto[]=[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  editar(producto:Producto):void{
    localStorage.setItem("id",producto.id.toString());
    this.router.navigate(["editarProducto"]);
  }
  guardarProducto():void{
    this.router.navigate(["agregarProducto"]);
  }

  eliminar(producto:Producto){
    this.service.eliminarProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      alert("Persona Eliminada")
    })
  }

}
