import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'catalogue',
                children: [
                    {
                        path: '',
                        loadChildren: '../catalogue/catalogue.module#CataloguePageModule'
                    }
                ]
            },
            {path: 'catalogue/cat-food', loadChildren: '../cat-food/cat-food.module#CatFoodPageModule'},
            {path: 'catalogue/cat-textil', loadChildren: '../cat-textil/cat-textil.module#CatTextilPageModule'},
            {path: 'catalogue/cat-furniture', loadChildren: '../cat-furniture/cat-furniture.module#CatFurniturePageModule'},
            {path: 'catalogue/cat-others', loadChildren: '../cat-others/cat-others.module#CatOthersPageModule'},
            {
                path: 'cart',
                children: [
                    {
                        path: '',
                        loadChildren: '../cart/cart.module#CartPageModule'
                    }
                ]
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: '../orders/orders.module#OrdersPageModule'
                    }
                ]
            },
            {
                path: 'favs',
                children: [
                    {
                        path: '',
                        loadChildren: '../favs/favs.module#FavsPageModule'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports:
        [
            RouterModule.forChild(routes)
        ],
    exports:
        [
            RouterModule
        ]
})

export class TabsRoutingModule {
}
