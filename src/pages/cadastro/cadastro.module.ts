import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CadastroPage } from './cadastro';
import { AgendamentoService } from "../../domain/agendamento/agendamento.service";
import { AgendamentoDao } from "../../domain/agendamento/agendamento-dao";

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
  ],
  providers: [
    {provide: Storage, useFactory: () => {
      return new Storage({
        driverOrder: ['indexeddb'],
        name: 'aluracar',
        storeName: 'agendamentos'
      })
    }},
    AgendamentoService,
    AgendamentoDao
  ]
})
export class CadastroPageModule {}
