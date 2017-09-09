import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { UsuarioService } from "../../domain/usuario/usuario.service";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    UsuarioService
  ]
})
export class LoginPageModule {}
