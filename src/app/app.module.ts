import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ListaTarefaPage } from '../pages/lista-tarefa/lista-tarefa';
import { ListaCompraPage } from '../pages/lista-compra/lista-compra';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NovaTarefaPage } from '../pages/nova-tarefa/nova-tarefa';
import { NovaCompraPage } from '../pages/nova-compra/nova-compra';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaTarefaPage,
    ListaCompraPage,
    NovaTarefaPage,
    NovaCompraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaTarefaPage,
    ListaCompraPage,
    NovaTarefaPage,
    NovaCompraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
