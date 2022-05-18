import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from '../interfaces/portfolio.interface';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experienciaList: Experiencia []=[];
  experiencia: Experiencia={
    id:0,
    position:"",
    company:"",
    funcion:"",
    img:"",
    mode:"",
    inicio:"",
    fin:"",
    timeElapsed:"",
  }
 
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerExperiencia().subscribe(data=>{
      console.log(data);
      this.experienciaList= data;
   });
  }

  agregarExpe(){
    this.datosPortfolio.agregarExperiencia(this.experiencia).subscribe(data=>
    this.experienciaList.push(data))
    };
  

  deleteExpe(experiencia: Experiencia ){
      alert("Está seguro de eliminar?")
      this.datosPortfolio.deleteExperiencia(experiencia)
      .subscribe(
       ()=>[
       this.experienciaList=this.experienciaList.filter( (item) => {
        console.log("experiencia deleted!"); 
       
        return item.id !== experiencia.id
        
       })
      ]
      )};
      
  editarExpe(experiencia: Experiencia){
        this.datosPortfolio.editarExperiencia(experiencia).subscribe()
         
   };

   openforEdit(experiencia: Experiencia){
    this.experiencia= experiencia;
  }
       

}
