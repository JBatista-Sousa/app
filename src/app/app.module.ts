import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ListaTarefaPage } from '../pages/lista-tarefa/lista-tarefa';
import { ListaCompraPage } from '../pages/lista-compra/lista-compra';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NovaTarefaPage } from '../pages/nova-tarefa/nova-tarefa';
import { NovaCompraPage } from '../pages/nova-compra/nova-compra';
import { PerfilPage } from '../pages/perfil/perfil';
import { Camera } from '@ionic-native/camera';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaTarefaPage,
    ListaCompraPage,
    NovaTarefaPage,
    NovaCompraPage,
    ListaEventoPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaTarefaPage,
    ListaCompraPage,
    NovaTarefaPage,
    NovaCompraPage,
    ListaEventoPage,
    PerfilPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
