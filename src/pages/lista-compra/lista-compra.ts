import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ModalController} from 'ionic-angular';
import { NovaCompraPage } from '../nova-compra/nova-compra';

@IonicPage()
@Component({
  selector: 'page-lista-compra',
  templateUrl: 'lista-compra.html',
})
export class ListaCompraPage {
  compras;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController, public toastCtrl:ToastController,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
      this.compras = ['Coco', 'Corote'];
      this.dataatual = new Date();
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ListaCompraPage');
    }
    
    novacompra() {
      let modal = this.modalCtrl.create(NovaCompraPage, {});
      modal.onDidDismiss(data => {
        this.add(data.novaCompra);
      })
      modal.present();
    }

    add(novaCompra) {
      let loading = this.loadingCtrl.create({
        content: 'Processando...'
      });

      loading.present();


      setTimeout(() => {
        this.compras.push(novaCompra);
        let toast = this.toastCtrl.create({
          message: 'Ítem adicionado com sucesso',
          duration: 3000,
          position: 'top'
        });

        toast.present();
        loading.dismiss();
      }, 5000);
    }

    delete(compra){
      let alert = this.alertCtrl.create({
        title: 'Confirmação',
        message: 'Deseja excluir essa compra?',
        buttons: [
          {
            text: 'Não',
            handler: () => {
  
            }
          },
          {
            text: 'Sim',
            handler: () => {
  
              let loading = this.loadingCtrl.create({
                content: 'Excluindo...'
              });
  
              loading.present();

              setTimeout(() => {
                var i = this.compras.indexOf(compra);
                this.compras.splice(i, 1);
  
                let toast = this.toastCtrl.create({
                  message: 'Compra excluída com sucesso',
                  duration: 5000,
                  position: 'bottom'
                });
  
                toast.present();
  
                loading.dismiss();
              }, 5000);
            }
  
          }
        ]
      });
      alert.present();
    }
  }


