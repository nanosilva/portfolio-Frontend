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
  login: boolean= true;
  personaList:any;
  persona: Persona[]=[];
   
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerAbout().subscribe(data=>{
      console.log(data);
      this.personaList= data;
  });
}
estaLogueado(){
  this.login=!true;

}


 



}
