import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-comnpras',
  templateUrl: 'lista-compras.html',
})
export class ListaComprasPage {
  compras;
  novaCompra;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.compras = ['Arroz', 'Bolo'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaComprasPage');
  }
  add() {
    this.compras.push(this.novaCompra);
    this.novaCompra='';
  }
  delete(compra){
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);
  }
}
