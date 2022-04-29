import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion, EducacionList } from '../interfaces/portfolio.interface';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList: Educacion[]=[];
  educacion: Educacion = {
		id:3,
		school:"",
		title:"" ,
		career:"" ,
    start:"",
    img:"",
    end:""
   }
  
  

  constructor(private datosPortfolio: PortfolioService){

    }
  
    ngOnInit(): void {
    this.datosPortfolio.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacionList= data;
    });
  
  }
  editar(){
    this.datosPortfolio.editarEducacion(this.educacion).subscribe(data=>
    this.educacionList=data);
    };
    
  delete(){
    this.datosPortfolio.deleteDatos(this.educacion.id).subscribe(data=>
      this.educacionList=data);
  };
  openforEdit(educacion: any){
    this.educacion= educacion;
  }
  
  }


  
    
   

