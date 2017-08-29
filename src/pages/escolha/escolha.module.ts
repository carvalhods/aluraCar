import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { EscolhaPage } from "./escolha";

@NgModule({
  declarations: [
    EscolhaPage
  ],
  imports: [
    IonicPageModule.forChild(EscolhaPage),
  ]
  })
export class EscolhaPageModule { }
