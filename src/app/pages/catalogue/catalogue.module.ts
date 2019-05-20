import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CataloguePage} from './catalogue.page';
import {AppbarComponent} from '../../components/appbar/appbar.component';

const routes: Routes = [
    {
        path: '',
        component: CataloguePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CataloguePage]
})
export class CataloguePageModule {
}
