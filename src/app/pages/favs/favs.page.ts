import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-favs',
    templateUrl: './favs.page.html',
    styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {

    header: any;
    favs: string[] = [];

    constructor(private db: DatabaseService) {
        this.header = {title: 'Favs', ismenu: true, showcart: true};
        this.favs = this.db.getFavorites();
    }

    unfav(item: string) {
        this.db.addItemToFavorites(item);
    }

    ngOnInit() {
    }

}
