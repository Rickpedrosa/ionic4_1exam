import * as firebase from 'firebase';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    searchRef: firebase.database.Reference;
    items: any[] = [];
    itemsLoaded: any[] = [];

    constructor() {
    }

    loadDatabaseItems() {
        const localItems = [];

        this.searchRef = firebase.database().ref('/catalogo/decoracion');
        this.searchRef.on('value', decor => {
            decor.forEach(pelicula => {
                localItems.push(pelicula.val());
                return false;
            });
        });
        this.searchRef = firebase.database().ref('/catalogo/textil');
        this.searchRef.on('value', decor => {
            decor.forEach(pelicula => {
                localItems.push(pelicula.val());
                return false;
            });
        });
        this.searchRef = firebase.database().ref('/catalogo/comida');
        this.searchRef.on('value', decor => {
            decor.forEach(pelicula => {
                localItems.push(pelicula.val());
                return false;
            });
        });
        this.searchRef = firebase.database().ref('/catalogo/accesorios');
        this.searchRef.on('value', decor => {
            decor.forEach(pelicula => {
                localItems.push(pelicula.val());
                return false;
            });
        });
        this.items = localItems;
        this.itemsLoaded = localItems;
    }

    initItems() {
        this.items = this.itemsLoaded;
    }

    getItems(searchBar) {
        this.initItems();
        const q = searchBar.srcElement.value;
        if (!q) {
            return;
        }
        this.items = this.items.filter((v) => {
            if (v.nombre && q) {
                return v.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1;
            }
        });
    }

    ngOnInit() {
        this.loadDatabaseItems();
    }

}
