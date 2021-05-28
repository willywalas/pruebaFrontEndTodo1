import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Venta } from '../Modelo/Venta';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto : Producto = new Producto();
  venta : Venta = new Venta();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.obtenerDetalleProducto()
  }

  obtenerDetalleProducto(){
    let id=localStorage.getItem("idDetalleProducto")!;
    this.service.getProductoById(+id).subscribe(data=>{
    this.producto=data;
    })
  }

  realizarVenta(producto:Producto){
    this.venta.nombreProducto=producto.nombre
    this.venta.cantidadProducto=producto.stock
    this.venta.montoTotal=producto.stock*producto.precio
    this.venta.idProducto=producto.id

    this.service.createVenta(this.venta)
    .subscribe(data=>{
      alert("Se Agrego con éxito.... !!!");
      this.router.navigate([""]);
    },(err)=>
      alert("No hay stock suficiente")
    )

  }
  home(){
    this.router.navigate([""]);
  }

}
