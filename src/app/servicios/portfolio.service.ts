import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion, Experiencia, Persona, Proyecto, Skills } from '../components/interfaces/portfolio.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl= 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  obtenerEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiUrl}/educacion`);
    };

  
  obtenerAbout():Observable<Persona[]>{
      return this.http.get<Persona[]>(`${this.apiUrl}/persona`);
      };
  obtenerExperiencia():Observable<Experiencia[]>{
        return this.http.get<Experiencia[]>(`${this.apiUrl}/experiencia`);
        };
  
  obtenerSkills():Observable<Skills[]>{
        return this.http.get<Skills[]>(`${this.apiUrl}/skills`);
          }
        
 obtenerProyectos():Observable<Proyecto[]>{
            return this.http.get<Proyecto[]>(`${this.apiUrl}/proyecto`);
              }
      
  editarEducacion(educacion: Educacion ): Observable <any>{
      return this.http.post(`${this.apiUrl}/educacion`, educacion, httpOptions); 
  }

  deleteDatos(id:number): Observable <any>{
    const url = `${this.apiUrl}/educacion/id`
      return this.http.delete<any>(url)
  };
  agregarDatos(dato:any): Observable<any>{
    return this.http.post<any>(this.apiUrl, dato)
  };
 
}
