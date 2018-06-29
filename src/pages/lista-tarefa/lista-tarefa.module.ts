import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTarefaPage } from './lista-tarefa';


@NgModule({
  declarations: [
    ListaTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTarefaPage),
  ],
})
export class ListaTarefaPageModule {}
