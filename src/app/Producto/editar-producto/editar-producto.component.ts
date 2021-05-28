  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { TipoProducto } from 'src/app/Modelo/TipoProducto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  producto : Producto = new Producto();
  tipoProductos: TipoProducto[]=[];
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.obtenerProducto()

    this.service.getTipoProductos()
    .subscribe(data=>{
      this.tipoProductos=data;
    })
  }

  listar(){

  this.router.navigate(["listarProductos"]);
  console.log("click al botom")

  }
  obtenerProducto(){
  let id=localStorage.getItem("id")!;
  this.service.getProductoById(+id).subscribe(data=>{
  this.producto=data;
  })

  }
  editarProducto(producto:Producto){
  this.service.updateProducto(producto)
  .subscribe(data=>{
  this.producto=data;
  alert("Se actualizó con éxito");
  this.router.navigate(["listarProductos"]);
  })
  }

}
