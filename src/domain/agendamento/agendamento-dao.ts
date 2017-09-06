import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Agendamento } from "./agendamento";
import { Carro } from "../carro/carro";

@Injectable()
export class AgendamentoDao {

  constructor(
    private _storage: Storage
  ) {
  }

  private _getKey(agendamento: Agendamento) {
    return agendamento.email + agendamento.data.substr(0,10);
  }

  salva(agendamento: Agendamento) {
    const key = this._getKey(agendamento);
    return this._storage.set(key, agendamento);   // Retorna uma Promise
  }

  ehAgendamentoDuplicado(agendamento: Agendamento) {
    const key = this._getKey(agendamento);
    return this._storage.get(key)
            .then(dado => {
              return dado ? true : false;
            });
  }

  listaTodos() {
    let agendamentos: Agendamento[] = [];

    return this._storage.forEach(dado => {
        let carro = new Carro(dado.carro.nome, dado.carro.preco);
        let agendamento = new Agendamento(
                carro, dado.valor,
                dado.nome, dado.endereco,
                dado.email,
                dado.data,
                dado.confirmado);

        agendamentos.push(agendamento);
    })
    .then(() => agendamentos );
}
}
