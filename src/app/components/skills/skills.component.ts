import { Component, OnInit, ɵCurrencyIndex } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skills } from '../interfaces/portfolio.interface';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skillList: Skills[]=[];
  skill: Skills={
    id:0,
    nombre:"",
    detalle:"",
    imagen:"",
   
  }
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerSkills().subscribe(data=>{
    console.log(data);
    this.skillList= data
    });
  };

  agregarSk(){
    this.datosPortfolio.agregarSkill(this.skill).subscribe(data=>
      this.skillList.push(data))
  };


  delete(skill:Skills): void{
       alert("Está seguro de eliminar?")
      this.datosPortfolio.deleteSkill(skill)
      .subscribe(
       ()=>[
       this.skillList=this.skillList.filter( (item) => {
        console.log("skill deleted!"); 
        return item.id !== skill.id
        
       })
      ]
      )};

editarSk(skill: Skills){
        this.datosPortfolio.editarSkill(skill).subscribe()
         
       } ;

openforEdit( ){

  let formulario: any=document.getElementById("editar");
  this.skill
  }

}

