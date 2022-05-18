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
  private apiUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  obtenerEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiUrl}/educacion/ver`);
    };

  
  obtenerAbout():Observable<Persona[]>{
      return this.http.get<Persona[]>(`${this.apiUrl}/persona/ver`);
      };
  obtenerExperiencia():Observable<Experiencia[]>{
        return this.http.get<Experiencia[]>(`${this.apiUrl}/experiencia/ver`);
        };
  
  obtenerSkills():Observable<Skills[]>{
        return this.http.get<Skills[]>(`${this.apiUrl}/skills/ver`);
          }
        
 obtenerProyectos():Observable<Proyecto[]>{
            return this.http.get<Proyecto[]>(`${this.apiUrl}/proyectos/ver`);
              }
      
 agregarEducacion(educacion: Educacion ): Observable <any>{
      return this.http.post(`${this.apiUrl}/educacion/new`, educacion, httpOptions); 
  }

 deleteDatos(educacion:Educacion): Observable <Educacion>{
    const url = `${this.apiUrl}/educacion/delete/${educacion.id}`;
      return this.http.delete<Educacion>(url, httpOptions)
  };
 editarEducacion(educacion: Educacion):Observable<any>{
      return this.http.post<Educacion>(`${this.apiUrl}/educacion/edit/${educacion.id}`, educacion, httpOptions)
  };
 
agregarSkill(skill: Skills ): Observable <Skills>{
    return this.http.post<Skills>(`${this.apiUrl}/skills/new`, skill, httpOptions); 
}
deleteSkill(skill:Skills): Observable <Skills>{
  const url = `${this.apiUrl}/skills/delete/${skill.id}`;
    return this.http.delete<Skills>(url, httpOptions)
};

editarSkill(skill: Skills):Observable<Skills>{
return this.http.post<Skills>(`${this.apiUrl}/skills/edit/${skill.id}`, skill, httpOptions )
};


editarPersona(persona: Persona): Observable <any>{
  return this.http.post(`${this.apiUrl}/persona/edit/${persona.id}`, persona, httpOptions)
};

agregarPersona(persona: Persona ): Observable <Persona>{
  return this.http.post<Persona>(`${this.apiUrl}/persona/new`, persona, httpOptions); 
};

deletePersona(persona:Persona): Observable <Persona>{
  const url = `${this.apiUrl}/persona/delete/${persona.id}`;
    return this.http.delete<Persona>(url, httpOptions)
};

agregarExperiencia(experiencia: Experiencia ): Observable <any>{
  return this.http.post<Experiencia>(`${this.apiUrl}/experiencia/new`, experiencia, httpOptions); 
};

deleteExperiencia(experiencia:Experiencia): Observable <Experiencia>{
  const url = `${this.apiUrl}/experiencia/delete/${experiencia.id}`;
    return this.http.delete<Experiencia>(url, httpOptions)
};

editarExperiencia(experiencia: Experiencia): Observable <Experiencia>{
  return this.http.post<Experiencia>(`${this.apiUrl}/experiencia/edit/${experiencia.id}`, experiencia, httpOptions)
};

agregarProyecto(proyecto: Proyecto ): Observable <any>{
  return this.http.post<Proyecto>(`${this.apiUrl}/proyectos/new`, proyecto, httpOptions); 
};

deleteProyecto(proyecto:Proyecto): Observable <Proyecto>{
  const url = `${this.apiUrl}/proyectos/delete/${proyecto.id}`;
    return this.http.delete<Proyecto>(url, httpOptions)
};

editarProyecto(proyecto: Proyecto): Observable <Proyecto>{
  return this.http.post<Proyecto>(`${this.apiUrl}/proyectos/edit/${proyecto.id}`, proyecto, httpOptions)
};
}
