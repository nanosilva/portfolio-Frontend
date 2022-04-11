import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private miPortfolio: datos[]=[];
  
  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<undefined>('./assets/data.json');
  }
}
export interface datos {
  name: string;
  position: string;
  imagen: string;
  birth: string;
  side: string;
}