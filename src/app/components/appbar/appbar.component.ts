import {Component, Input, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
    headerdata: any;
    cartCount = 0;

    constructor(public mnCtrl: MenuController, private db: DatabaseService) {
    }

    showMenu() {
        this.mnCtrl.toggle();
    }

    @Input()
    set header(header: any) {
        this.headerdata = header;
    }

    get header() {
        return this.headerdata;
    }

    ngOnInit() {
        this.db.getObserveCart().subscribe(cart => {
            console.log(cart);
            this.cartCount = cart;
        });
    }

}
