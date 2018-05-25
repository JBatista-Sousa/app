import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaTarefaPage} from '../lista-tarefa/lista-tarefa';
import { ListaComprasPage} from '../lista-compras/lista-compras';

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

  exibirListaCompras() {
    this.navCtrl.push(ListaComprasPage);
  }
}
