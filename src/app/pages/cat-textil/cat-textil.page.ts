import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-cat-textil',
    templateUrl: './cat-textil.page.html',
    styleUrls: ['./cat-textil.page.scss'],
})
export class CatTextilPage implements OnInit {

    header: any;
    obv: any;

    constructor(private serviceDatabase: DatabaseService) {
        this.header = {title: 'Textil', ismenu: false, showcart: true};
        this.obv = {nov: this.serviceDatabase.loadTextilItems()};
    }

    ngOnInit() {
    }

}
