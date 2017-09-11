import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';

import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LoginPage } from "../pages/login/login";
import { PerfilPage } from "../pages/perfil/perfil";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;

  rootPage:any = LoginPage;

  public paginas = [
    { titulo: 'Agendamentos', componente: AgendamentosPage },
    { titulo: 'Perfil', componente: PerfilPage }
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    backgroundMode: BackgroundMode
  ) {

    backgroundMode.enable();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    platform.registerBackButtonAction(() => {
      if (this.nav.canGoBack()) {
        this.nav.pop();
      } else {
        // appMinimize.minimize();
        backgroundMode.moveToBackground();
      }
    });
  }

  abrePagina(pagina): void {
    this.nav.push(pagina.componente);
  }
}
