import { Component, OnInit } from '@angular/core';
import { pencilFill } from 'ngx-bootstrap-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pencilfill= pencilFill
  miPortfolio: any= {}

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio= data;
  });
}

}
