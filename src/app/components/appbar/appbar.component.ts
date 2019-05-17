import {Component, Input, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
    headerdata: any;

    constructor(public mnCtrl: MenuController) {

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
    }

}
