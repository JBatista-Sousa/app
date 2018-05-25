import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-tarefa',
  templateUrl: 'lista-tarefa.html',
})
export class ListaTarefaPage {
  tarefas;
  novaTarefa;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tarefas = ['comprar pão', 'ir para o trabalho', 'pagar as contas', 'jogar futebol', 'beber água'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTarefaPage');
  }
  add() {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa='';
  }
  delete(tarefa){
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }
}
