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
      
 agregarEducacion(educacion: Educacion ): Observable <any>{
      return this.http.post(`${this.apiUrl}/educacion`, educacion, httpOptions); 
  }

 deleteDatos(educacion:Educacion): Observable <Educacion>{
    const url = `${this.apiUrl}/educacion/${educacion.id}`;
      return this.http.delete<Educacion>(url, httpOptions)
  };
 editarEducacion(educacion: Educacion):Observable<any>{
      return this.http.put(`${this.apiUrl}/educacion/${educacion.id}`, educacion, httpOptions)
  };
 
agregarSkill(skill: Skills ): Observable <Skills>{
    return this.http.post<Skills>(`${this.apiUrl}/skills`, skill, httpOptions); 
}
deleteSkill(skill:Skills): Observable <Skills>{
  const url = `${this.apiUrl}/skills/${skill.id}`;
    return this.http.delete<Skills>(url, httpOptions)
};

editarSkill(skill: Skills):Observable<any>{
  return this.http.put(`${this.apiUrl}/skills/${skill.id}`, skill, httpOptions)
};

}
