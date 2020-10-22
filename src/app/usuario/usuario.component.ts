import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Escuela, Usuario } from '../models/usuario';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
  usuario: Usuario;
  escuelas:Escuela[];
  ngOnInit(): void {
    this.usuario = this.usuarioService.nuevoUsuario();
    this.escuelas= this.usuarioService.getEscuela();
  } 
  nuevoUsuario():void{
  this.usuarioService.addUsuario(this.usuario);
  this.usuario= this.usuarioService.nuevoUsuario();
  }

}
