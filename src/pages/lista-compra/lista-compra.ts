import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {
  compras;
  novaCompra;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl:AlertController, public toastCtrl:ToastController) {
    this.compras = ['Arroz', 'Feijão'];
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCompraPage');
  }
  add() {
    this.compras.push(this.novaCompra);
    this.novaCompra='';
    let toast = this.toastCtrl.create({
      message: 'Compra realizada com susseço',
      duration: 3000,
      position: 'top'
    });

    toast.present();

  }
  delete(compra){
    let alert = this.alertCtrl.create({
    title: 'Confirmação',
    message: 'Deseja excluir este item?',
    buttons: [
      {
        text: 'Não',
        handler: () => {

        }
      },
      {
        text: 'Sim',
        handler: () => {
          var i = this.compras.indexOf(compra);
          this.compras.splice(i, 1);

        }
      }
    ]
  });
  alert.present();

  }
}
