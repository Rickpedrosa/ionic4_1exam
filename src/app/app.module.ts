import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../environments/environment';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {SidemenuPageModule} from './pages/sidemenu/sidemenu.module';
import {TabsPageModule} from './pages/tabs/tabs.module';
import {APP_BASE_HREF} from '@angular/common';
import {DatabaseService} from './services/database.service';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,
        SidemenuPageModule, TabsPageModule, AngularFireDatabaseModule],
    providers: [
        StatusBar,
        SplashScreen,
        DatabaseService,
        AngularFireDatabase,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: FirestoreSettingsToken, useValue: {}},
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
