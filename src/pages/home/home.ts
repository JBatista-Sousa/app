import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaTarefaPage} from '../lista-tarefa/lista-tarefa';
import { ListaCompraPage} from '../lista-compra/lista-compra';
import {GestaoContaPage} from '../gestao-conta/gestao-conta';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  exibirLista() {
    this.navCtrl.push(ListaTarefaPage);
  }

  exibirCompra() {
    this.navCtrl.push(ListaCompraPage);
  }

  exibirConta() {
    this.navCtrl.push(GestaoContaPage);
  }
}
