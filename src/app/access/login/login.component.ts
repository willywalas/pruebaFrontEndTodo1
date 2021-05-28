import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  persona:Persona=new Persona()
  constructor(private router:Router,private service:ServiceService) { }

  
  ngOnInit(): void {
  }

  signIn(persona:Persona){
    this.service.login(persona)
      .subscribe(
        (response)=>{
        this.persona = response;
        
        sessionStorage.setItem('nombre', this.persona.nombre);
        sessionStorage.setItem('tipoUsuario', this.persona.tipoUsuario);

        this.router.navigateByUrl('/listar', { skipLocationChange: false }).then(() => {
          this.router.navigate(['listar']);
          window.location.reload();
        });
        
  },
        (error) => {                            
          alert("Credenciales Invalidas");
    
        }
  )
  }
  agregarCuenta(){
    this.router.navigate(["nuevaCuenta"]);
  }
  
}
