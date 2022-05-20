import { Component, OnInit } from '@angular/core';
import { pencilFill } from 'ngx-bootstrap-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from '../interfaces/portfolio.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  personaList: Persona[]=[];
  persona: Persona = {
    id: 0,
    nombre:"",
    apellido:"", 
    fecha_nacimiento:"",
    nacionalidad :"",
    mail:"",
    image:"",
    ocupacion:"",
    ubicacion:"",
    about:"",

  }
   
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerAbout().subscribe(data=>{
      console.log(data);
      this.personaList= data;
  });
}

openforEdit(persona: Persona){
  this.persona= persona;
}

editar(persona : Persona){
    this.datosPortfolio.editarPersona(persona).subscribe();
    alert("se guardaron cambios")
   } ;
onSubmit(){
  this.editar;
}

agregarPers(){
  this.datosPortfolio.agregarPersona(this.persona).subscribe(data=>
    this.personaList.push(data))
};

deletePers(persona:Persona){
  alert("Se elimará perfil")
  this.datosPortfolio.deletePersona(persona)
  .subscribe(
   ()=>[
   this.personaList=this.personaList.filter( (item) => {
    console.log("persona deleted!"); 
    return item.id !== persona.id
    
   })
  ]
  )};
}


 




