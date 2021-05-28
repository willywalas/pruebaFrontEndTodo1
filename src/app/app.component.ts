import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaWilliamsSamaniego';
  nombre = sessionStorage.getItem('nombre');
  tipoUsuario = sessionStorage.getItem('tipoUsuario');
  constructor(private router:Router){

  }

  Listar(){
    this.router.navigate(["listar"]);
    console.log("click al botom")
  }

  listarProductos(){
    this.router.navigate(["listarProductos"]);
  }

  listarCamisetas(){
    localStorage.setItem("idProducto","1");
    this.router.navigate(["camisetas"]);
  }
  listarVasos(){
    localStorage.setItem("idProducto","2");
    this.router.navigate(["vasos"]);
  }
  listarComics(){
    localStorage.setItem("idProducto","3");
    this.router.navigate(["comics"]);
  }
  listarJuguetes(){
    localStorage.setItem("idProducto","4");
    this.router.navigate(["juguetes"]);
  }
  listarAccesorios(){
    localStorage.setItem("idProducto","5");
    this.router.navigate(["accesorios"]);
  }
  
  login(){
    this.router.navigate(["login"]);
    console.log("click al botom")
  }

  home(){
    this.router.navigate([""]);
    console.log("click al botom")
  }

  singOut(){
    sessionStorage.clear();

    this.router.navigateByUrl('', { skipLocationChange: false }).then(() => {
      this.router.navigate(['']);
      window.location.reload();
    });
    
  }
}
