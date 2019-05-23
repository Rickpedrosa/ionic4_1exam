import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {AppbarComponent} from '../components/appbar/appbar.component';
import {ObservableDisplayerComponent} from '../components/observable-displayer/observable-displayer.component';

@NgModule({
    declarations: [AppbarComponent, ObservableDisplayerComponent],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [AppbarComponent, ObservableDisplayerComponent]
})
export class SharedModule {
}
