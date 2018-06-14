import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { NovaTarefaPage } from '../nova-tarefa/nova-tarefa';

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
    public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.tarefas = ['Estudar ddm', 'Jogar futebol', 'Ouvir música'];
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

    setTimeout(() => {
      this.tarefas.push(novaTarefa);
      let toast = this.toastCtrl.create({
        message: 'Tarefa criada com sucesso',
        duration: 3000,
        position: 'top'
      });

      toast.present();
      loading.dismiss();
    }, 5000);
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

            setTimeout(() => {
              var i = this.tarefas.indexOf(tarefa);
              this.tarefas.splice(i, 1);

              let toast = this.toastCtrl.create({
                message: 'Tarefa excluída com sucesso',
                duration: 3000,
                position: 'top'
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
