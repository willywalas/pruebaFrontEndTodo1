import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar-cuenta-login',
  templateUrl: './agregar-cuenta-login.component.html',
  styleUrls: ['./agregar-cuenta-login.component.css']
})
export class AgregarCuentaLoginComponent implements OnInit {
  persona: Persona = new Persona;
  tipoUsuarios=[
    {
      "tipo": "admin",
      "value": "admin"
  },
  {
    "tipo": "cliente",
    "value": "cliente"
}
  ]
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }

  guardarPersona(persona:Persona){
    console.log(persona.usuario)
    this.persona.tipoUsuario='cliente'
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se Agrego con éxito.... !!!");
      this.router.navigate(["login"]);
    })

  }

  listar(){
    
    this.router.navigate([""]);
  
}

}
