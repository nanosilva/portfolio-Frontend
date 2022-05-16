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
    inicio: string;
    fin: string;
} 
export interface Experiencia{
    id:number
    position: string;
    company: string;
    funcion: string;
    img: string;
    mode: string;
    inicio:string;
    fin: string;
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
    fecha: string;
    link: string;
  }
 