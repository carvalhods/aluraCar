import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Agendamento } from "../../domain/agendamento/agendamento";
import { AgendamentoDao } from "../../domain/agendamento/agendamento-dao";

@IonicPage()
@Component({
  selector: 'page-agendamentos',
  templateUrl: 'agendamentos.html',
})
export class AgendamentosPage {

  // esta propriedade alimentará o formulário
  public agendamentos: Agendamento[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private _agendamentoDao: AgendamentoDao) {

    this._agendamentoDao
      .listaTodos()
      .then(agendamentos => this.agendamentos = agendamentos);

  }

}
