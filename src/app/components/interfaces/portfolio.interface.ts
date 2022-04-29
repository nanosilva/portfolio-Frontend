 export interface Persona{
    id: number;
    nombre: string;
    apellido: string; 
    fecha_nacimiento: string;
    nacionalidad : string;
    mail: string;
    image: string;
    ocupacion: string;
    ubicacion: string;
    about: String
}
export interface Educacion{
    id: number;
    school: string;
    title: string;
    img: string;
    career: string;
    start: string;
    end: string;
} 
export interface Experiencia{
    id:number
    position: string;
    company: string;
    function: string;
    img: string;
    mode: string;
    start:string;
    end: string;
    timeElapsed:string;
  }
  export interface Skills{
    id: number;
    nombre: string;
    detalle: string;
    imagen: string;
  }
  export interface Proyecto{
    id: number;
    nombre: string;
    detalle: string;
    imagen: string;
  }
 export interface EducacionList{
  id: number;
  school: string;
  title: string;
  img: string;
  career: string;
  start: string;
  end: string;
 }