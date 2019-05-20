import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-favs',
    templateUrl: './favs.page.html',
    styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {

    header: any;

    constructor() {
        this.header = {title: 'Favs', ismenu: true, showcart: true};
    }

    ngOnInit() {
    }

}
