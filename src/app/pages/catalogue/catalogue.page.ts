import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.page.html',
    styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

    header: any;
    pages = [
        {
            title: 'Food',
            url: '/sidemenu/tabs/catalogue/cat-food'
        },
        {
            title: 'Textil',
            url: '/sidemenu/tabs/catalogue/cat-textil'
        },
        {
            title: 'Furniture',
            url: '/sidemenu/tabs/catalogue/cat-furniture'
        },
        {
            title: 'Others',
            url: '/sidemenu/tabs/catalogue/cat-others'
        }
    ];

    constructor() {
        this.header = {title: 'Catalogue', ismenu: true, showcart: true};
    }

    ngOnInit() {
    }

}
