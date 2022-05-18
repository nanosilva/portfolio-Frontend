import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: boolean= false;

  constructor(private datosPortfolio:PortfolioService,
    public loginService:AuthenticationService  ) { }

  ngOnInit(): void {
    
    
    }
   cerrarSesion(){
    this.loginService.logOut();
    console.log("click logout")
   }

    
}
