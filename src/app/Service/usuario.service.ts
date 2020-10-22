import { Injectable } from '@angular/core';
import { Usuario, Escuela } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios:Usuario[];
  private escuela:Escuela[];

  constructor() { 
    this.escuela=[
      {
        id:1,
        nombre:'Sistemas'
      },
      {
        id:2,
        nombre:'Arquitectura'
      },
      {
        id:3,
        nombre:'Civil'
      }
    ];
    this.usuarios=[
      {
        id:0  ,
        nombre:'Fernando',
        direccion:'casa',
        escuela:0
      }
    ];

  }
  getEscuela(){
    return this.escuela;
  }
  getUsuarios(){
    return this.usuarios;
  }
  addUsuario(usuario:Usuario){
    alert("ola")
      this.usuarios.push(usuario);
  }
  nuevoUsuario():Usuario{
   
    return{
      id:this.usuarios.length,
      nombre:'',
      direccion:'',
      escuela:0
    }
  }
}
