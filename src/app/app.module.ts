import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPageModule } from '../pages/escolha/escolha.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { AgendamentosPageModule } from '../pages/agendamentos/agendamentos.module';
import { LoginPageModule } from '../pages/login/login.module';
import { PerfilPageModule } from "../pages/perfil/perfil.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CadastroPageModule,
    EscolhaPageModule,
    AgendamentosPageModule,
    LoginPageModule,
    PerfilPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
