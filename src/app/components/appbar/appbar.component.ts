import {Component, Input, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
    headerdata: any;
    cartCount = 0;

    constructor(public mnCtrl: MenuController,
                private db: DatabaseService,
                private location: Location,
                private router: Router) {
    }

    showMenu() {
        this.mnCtrl.toggle();
    }

    back() {
        this.location.back();
    }

    goSearchPage() {
        this.router.navigateByUrl('search');
    }

    @Input()
    set header(header: any) {
        console.log(header);
        this.headerdata = header;
    }

    get header() {
        return this.headerdata;
    }

    ngOnInit() {
        this.db.getObserveAmountCart().subscribe(cart => {
            this.cartCount = cart;
        });
    }

}
