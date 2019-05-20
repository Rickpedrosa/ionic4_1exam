import {NgModule} from '@angular/core';
import {CartPage} from './cart/cart.page';
import {CatFoodPage} from './cat-food/cat-food.page';
import {CatFurniturePage} from './cat-furniture/cat-furniture.page';
import {CatOthersPage} from './cat-others/cat-others.page';
import {CatTextilPage} from './cat-textil/cat-textil.page';
import {CataloguePage} from './catalogue/catalogue.page';
import {FavsPage} from './favs/favs.page';
import {HomePage} from './home/home.page';
import {OrdersPage} from './orders/orders.page';
import {SidemenuPage} from './sidemenu/sidemenu.page';
import {TabsPage} from './tabs/tabs.page';
import {AppbarComponent} from '../components/appbar/appbar.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SidemenuPageModule} from './sidemenu/sidemenu.module';

@NgModule(
    {
        imports: [CommonModule,
            FormsModule,
            IonicModule,
        SidemenuPageModule],
        exports: [],
        declarations: [
            CartPage,
            CatFoodPage,
            CatFurniturePage,
            CatOthersPage,
            CatTextilPage,
            CataloguePage,
            FavsPage,
            HomePage,
            OrdersPage,
            SidemenuPage,
            TabsPage,
            AppbarComponent
        ],
        entryComponents: [SidemenuPage]
    }
)
export class PagesModule {

}
