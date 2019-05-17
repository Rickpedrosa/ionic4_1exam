import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    header: any;

    constructor() {
        this.header = {title: 'Home', ismenu: true, showcart: true};
    }

    ngOnInit() {
    }

}
