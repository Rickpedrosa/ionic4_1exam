import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    header: any;

    constructor() {
        this.header = {title: 'Cart', ismenu: true, showcart: true};
    }

    ngOnInit() {
    }

}
