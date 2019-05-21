import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SidemenuPage} from './sidemenu.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: '',
        component: SidemenuPage,
        children: [
            {path: 'tabs', loadChildren: '../tabs/tabs.module#TabsPageModule'},
            {path: 'cat-food', loadChildren: '../cat-food/cat-food.module#CatFoodPageModule'},
            {path: 'cat-textil', loadChildren: '../cat-textil/cat-textil.module#CatTextilPageModule'},
            {path: 'cat-furniture', loadChildren: '../cat-furniture/cat-furniture.module#CatFurniturePageModule'},
            {path: 'cat-others', loadChildren: '../cat-others/cat-others.module#CatOthersPageModule'}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SidemenuPage]
})
export class SidemenuPageModule {
}
