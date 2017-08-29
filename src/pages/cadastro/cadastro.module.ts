import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';

import { AgendamentoService } from "../../domain/agendamento/agendamento.service";

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
  ],
  providers: [
    AgendamentoService
  ]
})
export class CadastroPageModule {}
