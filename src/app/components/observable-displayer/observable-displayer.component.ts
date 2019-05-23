import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-observable-displayer',
    templateUrl: './observable-displayer.component.html',
    styleUrls: ['./observable-displayer.component.scss']
})
export class ObservableDisplayerComponent implements OnInit {

    observableData: Observable<any[]>;

    constructor(private serviceDatabase: DatabaseService) {
    }

    ngOnInit() {
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

    @Input()
    set observable(observable: Observable<any[]>) {
        this.observableData = observable;
    }

    get observable() {
        return this.observableData;
    }
}
