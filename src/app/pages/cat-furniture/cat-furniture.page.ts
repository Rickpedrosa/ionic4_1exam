import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-cat-furniture',
    templateUrl: './cat-furniture.page.html',
    styleUrls: ['./cat-furniture.page.scss'],
})
export class CatFurniturePage implements OnInit {
    header: any;
    obv: any;

    constructor(private serviceDatabase: DatabaseService) {
        this.header = {title: 'Furniture', ismenu: false, showcart: true};
        this.obv = {nov: this.serviceDatabase.loadMueblesDecorItems()};
    }

    ngOnInit() {
    }

}
