import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsuarioService } from "../../domain/usuario/usuario.service";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public url: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioService
  ) { }

  get usuarioLogado() {
    return this._usuarioService.obtemUsuarioLogado();
  }
}
