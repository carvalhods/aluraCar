import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'escolha.html'
})

export class EscolhaPage implements OnInit {

  public carro;

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.carro = this.navParams.get('carroSelecionado')
  }

}
