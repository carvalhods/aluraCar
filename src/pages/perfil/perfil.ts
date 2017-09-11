import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { UsuarioService } from "../../domain/usuario/usuario.service";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage implements OnInit {

  public url: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioService,
    private _camera: Camera
  ) { }

  ngOnInit() {
    this.url = this._usuarioService.obtemAvatar();
  }

  tiraFoto() {
    this._camera.getPicture({
      destinationType: this._camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true
    })
    .then(url => {
      this._usuarioService.guardaAvatar(url);
      this.url = url;
    })
    .catch(err => console.log(err));
  }

  get usuarioLogado() {
    return this._usuarioService.obtemUsuarioLogado();
  }
}
