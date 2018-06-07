import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {
  compras;
  novaCompra;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.compras = ['Arroz', 'Feijão'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCompraPage');
  }
  add() {
    this.compras.push(this.novaCompra);
    this.novaCompra='';
      let alert = this.alertCtrl.create({
      title: 'Compra',
      subTitle: 'Cadastrado com susseço',
      buttons: ['ok!']
    });
    alert.present();

  }
  delete(compra){
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);
  }
}
