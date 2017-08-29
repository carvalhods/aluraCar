import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Agendamento } from "./agendamento";
import { AgendamentoDao } from './agendamento-dao';

@Injectable()
export class AgendamentoService {

  constructor(
    private _http: Http,
    private _dao: AgendamentoDao
  ) {
  }

  agenda(agendamento: Agendamento) {
    const url = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;

    return this._dao.ehAgendamentoDuplicado(agendamento)
            .then(existe => {
              if (existe) throw new Error("Este agendamento já foi realizado");
              return this._http
                .get(url)
                .toPromise()
                .then(() => agendamento.confirmado = true, err => console.log(err))
                .then(() => this._dao.salva(agendamento))
                .then(() => agendamento.confirmado);
            })
  }
}
