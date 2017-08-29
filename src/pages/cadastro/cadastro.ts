import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { Carro } from "../../domain/carro/carro";
import { Agendamento } from '../../domain/agendamento/agendamento';
import { HomePage } from "../home/home";
import { AgendamentoService } from '../../domain/agendamento/agendamento.service';

@IonicPage()
@Component({
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit {

  public agendamento: Agendamento;
  public carro: Carro;
  public precoTotal: number;
  private _alert: Alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _agendamentoService: AgendamentoService
  ) {
  }

  ngOnInit() {
    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');
    this.agendamento = new Agendamento(this.carro, this.precoTotal);

    this._alert = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'OK', handler: () => { this.navCtrl.setRoot(HomePage) } }]
    });
  }

  agenda() {
    if(!this.agendamento.nome || !this.agendamento.email || !this.agendamento.endereco) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Você deve preencher todas as informações',
        buttons: [{
          text: 'OK'
        }]
      }).present();
      return;
    }

    this._agendamentoService.agenda(this.agendamento)
      .then(() => {
        this._alert.setSubTitle('Agendamento realizado com sucesso');
        this._alert.present();
      })
      .catch(err => {
        this._alert.setSubTitle('Não foi possível realizar o agendamento');
        this._alert.present();
      });
  }
}
