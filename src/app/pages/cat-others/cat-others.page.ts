import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-cat-others',
    templateUrl: './cat-others.page.html',
    styleUrls: ['./cat-others.page.scss'],
})
export class CatOthersPage implements OnInit {

    header: any;
    obv: any;

    constructor(private serviceDatabase: DatabaseService) {
        this.header = {title: 'Others', ismenu: false, showcart: true};
        this.obv = {nov: this.serviceDatabase.loadAccesoriosItems()};
    }

    ngOnInit() {
    }

}
