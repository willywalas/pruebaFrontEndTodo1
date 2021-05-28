import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { TipoProducto } from 'src/app/Modelo/TipoProducto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  producto: Producto = new Producto;
  tipoProductos: TipoProducto[]=[];

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getTipoProductos()
    .subscribe(data=>{
      this.tipoProductos=data;
    })
  }

  guardarProducto(producto:Producto){
    
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se Agrego con éxito.... !!!");
      this.router.navigate(["listarProductos"]);
    })

  }

  listar(){
    
    this.router.navigate(["listarProductos"]);
    console.log("click al botom")
  
}
}
