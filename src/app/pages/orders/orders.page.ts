import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

    header: any;

    constructor() {
        this.header = {title: 'Orders', ismenu: true, showcart: false};
    }

    ngOnInit() {
    }

}
