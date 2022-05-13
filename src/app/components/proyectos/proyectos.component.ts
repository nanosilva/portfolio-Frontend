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

  
}
