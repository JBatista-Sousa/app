import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { NovaTarefaPage } from '../nova-tarefa/nova-tarefa';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-lista-tarefa',
  templateUrl: 'lista-tarefa.html',
})
export class ListaTarefaPage {
  tarefas;
  dataatual;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController, public storage: Storage) {

    this.tarefas = [];
    this.storage.get('tarefas').then((val) => {
      this.tarefas = val;
    });
    this.dataatual = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTarefaPage');
  }

  novatarefa() {
    let modal = this.modalCtrl.create(NovaTarefaPage, {});
    modal.onDidDismiss(data => {
      this.add(data.novaTarefa);
    })
    modal.present();
  }

  add(novaTarefa) {
    let loading = this.loadingCtrl.create({
      content: 'Processando...'
    });
    loading.present();


    this.tarefas.push(novaTarefa);
    this.storage.set('tarefas', this.tarefas).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Tarefa criada com sucesso',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      loading.dismiss();
    });
  }

  delete(tarefa) {
    let alert = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja excluir essa tarefa?',
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
              content: 'Processando...'
            });

            loading.present();

            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
            this.storage.set('tarefas', this.tarefas).then(() => {
              let toast = this.toastCtrl.create({
                message: 'Tarefa excluída com sucesso',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();

              loading.dismiss();
            });

          }

        }
      ]
    });
    alert.present();
  }
}
