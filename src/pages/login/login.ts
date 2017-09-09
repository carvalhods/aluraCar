import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from "../home/home";
import { UsuarioService } from "../../domain/usuario/usuario.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public senha: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioService,
    private _alertCtrl: AlertController
  ) { }

  efetuaLogin() {
    this._usuarioService.efetuaLogin(this.email, this.senha)
      .then(() => {
        this.navCtrl.setRoot(HomePage)
      })
      .catch(() => {
        this._alertCtrl.create({
          title: 'Problema no login',
          subTitle: 'Email ou senha inválidos',
          buttons: [{ text: 'OK' }]
        }).present();
      })
  }
}
