import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-camisetas',
  templateUrl: './listar-camisetas.component.html',
  styleUrls: ['./listar-camisetas.component.css']
})
export class ListarCamisetasComponent implements OnInit {
  productos:Producto[]=[];
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.obtenerCamisetas()
    
  }
  
  obtenerCamisetas(){
    let id=localStorage.getItem("idProducto")!;
    this.service.getProductoByTipoProducto(+id).
    subscribe(data=>{
    this.productos=data;
    })
  
    }
  
    verDetalleProducto(producto:Producto):void{
      localStorage.setItem("idDetalleProducto",producto.id.toString());
      this.router.navigate(["detalleProducto"]);
    }
    /*editarProducto(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
    this.producto=data;
    alert("Se actualizó con éxito");
    this.router.navigate(["listarProductos"]);
    })
    }*/

}
