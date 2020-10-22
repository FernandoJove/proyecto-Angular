import { Component, OnInit } from '@angular/core';
import { Usuario,Escuela } from '../models/usuario';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
  usuarios:Usuario[];

  ngOnInit(): void {
  this.usuarios=this.usuarioService.getUsuarios();
  }

}
