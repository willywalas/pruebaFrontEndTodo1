import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
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
    this.obtenerPersona()
  }

  listar(){
    
      this.router.navigate(["listar"]);
      console.log("click al botom")
    
  }
  obtenerPersona(){
    let id=localStorage.getItem("id")!;
    this.service.getPersonaById(+id).subscribe(data=>{
      this.persona=data;
    })
    
  }
  editarPersona(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se actualizó con éxito");
      this.router.navigate(["listar"]);
    })
  }

}
