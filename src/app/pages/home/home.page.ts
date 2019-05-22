import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    header: any;
    novedades: Observable<any[]>;

    constructor(private serviceDatabase: DatabaseService) {
        this.header = {title: 'Home', ismenu: true, showcart: true};
    }

    ngOnInit() {
        this.novedades = this.serviceDatabase.loadNovedadesTable();
        this.novedades.subscribe(data => {
            console.log(data);
        });
    }

    addToFavs(item: string) {
        this.serviceDatabase.addItemToFavorites(item);
    }

    isItemFaved(item: string) {
        return this.serviceDatabase.isTheItemFaved(item);
    }

    addToCart(name: string, image: string, dolars: number) {
        this.serviceDatabase.addToCarrito({
            article: name,
            quantity: 1,
            img: image,
            price: dolars
        });
    }

    removeFromCart(name: string, image: string, dolars: number) {
        this.serviceDatabase.removeFromCarrito({
            article: name,
            quantity: 1,
            img: image,
            price: dolars
        });
    }
}
