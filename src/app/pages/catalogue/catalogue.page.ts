import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.page.html',
    styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

    header: any;

    constructor() {
        this.header = {title: 'Catalogue', ismenu: true, showcart: true};
    }

    ngOnInit() {
    }

}
