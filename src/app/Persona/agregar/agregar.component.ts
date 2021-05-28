import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  persona: Persona = new Persona;
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }

  guardarPersona(persona:Persona){
    console.log(persona.usuario)
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se Agrego con éxito.... !!!");
      this.router.navigate(["listar"]);
    })

  }

  listar(){
    
    this.router.navigate(["listar"]);
    console.log("click al botom")
  
}

}
