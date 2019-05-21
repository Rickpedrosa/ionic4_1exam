import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {AppbarComponent} from '../components/appbar/appbar.component';

@NgModule({
    declarations: [AppbarComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [AppbarComponent]
})
export class SharedModule {
}
