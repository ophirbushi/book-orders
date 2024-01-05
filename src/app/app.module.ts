import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { FirebaseOptions, initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getDatabase, provideDatabase } from '@angular/fire/database'
import { appInit } from './app.init'
import { StateService } from './shared/state.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBrfu3dY8mEX5_o-zJfI6ZQIpe8If8rTaQ",
      authDomain: "book-orders-449e1.firebaseapp.com",
      databaseURL: "https://book-orders-449e1-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "book-orders-449e1",
      storageBucket: "book-orders-449e1.appspot.com",
      messagingSenderId: "378275388001",
      appId: "1:378275388001:web:5e591215023f96df262820"
    } as FirebaseOptions)),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    { provide: APP_INITIALIZER, multi: true, useFactory: appInit, deps: [StateService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
