import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: boolean= false;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    
    }
    estaLogueado(){
      this.login=!false;
      console.log("click");
      
    }

}
