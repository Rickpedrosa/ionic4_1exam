import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.page.html',
    styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

    pages = [
        {
            title: 'Food',
            url: '/sidemenu/cat-food'
        },
        {
            title: 'Textil',
            url: '/sidemenu/cat-textil'
        },
        {
            title: 'Furniture',
            url: '/sidemenu/cat-furniture'
        },
        {
            title: 'Others',
            url: '/sidemenu/cat-others'
        }
    ];
    selectedPath = '';

    constructor(private router: Router) {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }

    ngOnInit() {
    }

}
