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
import {AppbarComponentModule} from './components/appbar/appbar.component.module';
import {SidemenuPageModule} from './pages/sidemenu/sidemenu.module';
import {AppbarComponent} from './components/appbar/appbar.component';
import {TabsPageModule} from './pages/tabs/tabs.module';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [AppbarComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AppbarComponentModule,
        SidemenuPageModule, TabsPageModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: FirestoreSettingsToken, useValue: {}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
