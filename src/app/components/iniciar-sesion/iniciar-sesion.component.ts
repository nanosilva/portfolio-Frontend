import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  errorInicio: boolean=false;
  loading: boolean = false;
  usuario: any={
    email: "",
    password:"",
  };

    constructor(private router: Router,
              private loginservice: AuthenticationService){
                
              }

  ngOnInit(): void {
  }
  
  login(){
    let formulario: any=document.getElementById("login");
    let formularioValido: boolean = formulario.reportValidity();
    if(formularioValido){
      this.loginservice.authenticateUser(this.usuario).subscribe(data=>
        this.iniciarSesion(data));
        console.log(this.usuario);
    }
   
    }

    iniciarSesion(resultado: any){
      if(resultado){
        sessionStorage.setItem("usuario",JSON.stringify(resultado));
       this.router.navigate(["/portfolio"]) ;
       }
      else{
        this.errorInicio=true
      }
    }
    cerrarSesion(){
      sessionStorage.removeItem("usuario")
    }
}
