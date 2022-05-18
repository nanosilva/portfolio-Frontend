import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from '../interfaces/portfolio.interface';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList: Educacion[]=[];
  educacion: Educacion = {
		id:0,
		school:"",
		title:"" ,
		career:"" ,
    inicio:"",
    img:"",
    fin:""
   }
  
  

  constructor(public datosPortfolio: PortfolioService){

    }
  
    ngOnInit(): void {
    this.datosPortfolio.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacionList= data;
    });
  
  }
  agregar(){
    this.datosPortfolio.agregarEducacion(this.educacion).subscribe(data=>
    this.educacionList.push(data))
    };
    
  delete(educacion:Educacion){
    alert("Está seguro de eliminar?")
    this.datosPortfolio.deleteDatos(educacion)
    .subscribe(
     ()=>[
     this.educacionList=this.educacionList.filter( (item) => {
      console.log("eduacion deleted!"); 
      return item.id !== educacion.id
      
     })
    ]
    )};

   editar(educacion: Educacion){
     this.datosPortfolio.editarEducacion(educacion).subscribe()
      
    } ;

  openforEdit(educacion: Educacion){
    this.educacion= educacion;
  }
  onSubmit(){
   this.editar;

  }
  
  }


  
    
   

