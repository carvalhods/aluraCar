import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Agendamento } from "../../domain/agendamento/agendamento";
import { AgendamentoDao } from "../../domain/agendamento/agendamento-dao";
import { AgendamentoService } from "../../domain/agendamento/agendamento.service";

@IonicPage()
@Component({
  selector: 'page-agendamentos',
  templateUrl: 'agendamentos.html',
})
export class AgendamentosPage implements OnInit {

  public agendamentos: Agendamento[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private _agendamentoDao: AgendamentoDao,
      private _agendamentoService: AgendamentoService,
      private _alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
    this._agendamentoDao
      .listaTodos()
      .then(agendamentos => this.agendamentos = agendamentos);
  }

  reenvia(agendamento: Agendamento) {
    this._agendamentoService.reagenda(agendamento)
    .then(confirmado => {
      confirmado
        ? this._alertCtrl.create({
            title: 'Envio',
            subTitle: 'Agendamento enviado com sucesso',
            buttons: [{ text: 'OK' }]
          }).present()
        : this._alertCtrl.create({
            title: 'Envio',
            subTitle: 'Não foi possível reenviar o agendamento. Tente outra vez.',
            buttons: [{ text: 'OK'}]
          }).present();
    });
  }

}
