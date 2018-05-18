import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tarefas;
  novaTarefa;
  dataatual;

  constructor(public navCtrl: NavController) {
    this.tarefas = ['comprar pão', 'ir para o trabalho', 'pagar as contas', 'jogar futebol', 'beber água'];
    this.dataatual = new Date();
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
