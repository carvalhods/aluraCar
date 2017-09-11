import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { HomePage } from "../home/home";
import { UsuarioService } from "../../domain/usuario/usuario.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string = 'joao@alura.com.br';
  public senha: string = 'alura123';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioService,
    private _alertCtrl: AlertController,
    private _localNotif: LocalNotifications
  ) {
    // this._localNotif.schedule({
    //   id: 1,
    //   text: 'Single notification',
    //   at: new Date(new Date().getTime() + 20000)
    // });
  }

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
