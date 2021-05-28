import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[]=[];

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  verDetalleProducto(producto:Producto):void{
    localStorage.setItem("idDetalleProducto",producto.id.toString());
    this.router.navigate(["detalleProducto"]);
  }

}
