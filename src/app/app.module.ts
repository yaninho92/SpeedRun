import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyB9sTtZB1IfEPYhknym9TfgZSNfM-PkkaA",
  authDomain: "speedrun-17a4e.firebaseapp.com",
  projectId: "speedrun-17a4e",
  storageBucket: "speedrun-17a4e.appspot.com",
  messagingSenderId: "1075983841778",
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,AngularFireAuthModule,AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
