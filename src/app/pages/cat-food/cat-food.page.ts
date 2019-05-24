import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-cat-food',
    templateUrl: './cat-food.page.html',
    styleUrls: ['./cat-food.page.scss'],
})
export class CatFoodPage implements OnInit {

    header: any;
    obv: any;

    constructor(private serviceDatabase: DatabaseService) {
        this.header = {title: 'Food', ismenu: false, showcart: true};
        this.obv = {nov: this.serviceDatabase.loadComidaItems()};
    }

    ngOnInit() {
    }

}
