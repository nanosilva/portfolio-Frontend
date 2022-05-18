import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/portfolio.interface';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

proyectoList: Proyecto[]=[];
proyecto: Proyecto = {
  id:0,
  nombre:"",
  detalle:"",
  imagen:"",
  fecha:"",
  link:"",
}


  constructor( private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerProyectos().subscribe(data=>{
      console.log(data),
      this.proyectoList=data;
    
  })};

  agregarProyec(proyecto: Proyecto){
    this.datosPortfolio.agregarProyecto(proyecto).subscribe()
  
};
deleteProyec(proyecto: Proyecto ){
  alert("Está seguro de eliminar?")
  this.datosPortfolio.deleteProyecto(proyecto)
  .subscribe(
   ()=>[
   this.proyectoList=this.proyectoList.filter( (item) => {
    console.log("proyect deleted!"); 
   
    return item.id !== proyecto.id
    
   })
  ]
  )};

  editarProyec(proyecto: Proyecto){
    this.datosPortfolio.editarProyecto(proyecto).subscribe()
     
};

openforEdit(proyecto: Proyecto){
this.proyecto= proyecto;
}
}
