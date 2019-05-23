import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Art} from '../interfaces/interface.cart';
import {ToastController} from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    favorites: string[] = [];
    cart: Art[] = [];
    oldArt: Art;
    observableCart: BehaviorSubject<number> = new BehaviorSubject(this.cart.length);

    constructor(private afDB: AngularFireDatabase,
                private toast: ToastController) {
    }

    loadNovedadesTable() {
        return this.afDB.list('novedades').valueChanges();
    }

    getFavorites() {
        return this.favorites;
    }

    getCart() {
        return this.cart;
    }

    getObserveCart(): Observable<number> {
        return this.observableCart.asObservable();
    }

    addItemToFavorites(item: string) {
        if (this.favorites.length === 0) {
            this.favorites.unshift(item);
        } else if (this.favorites.length !== 0) {
            if (this.favorites.indexOf(item) === -1) {
                this.favorites.unshift(item);
            } else {
                this.favorites.splice(this.favorites.indexOf(item), 1);
            }
        }
        console.log('database favs', this.favorites);
    }

    isTheItemFaved(item: string) {
        return this.favorites.indexOf(item) !== -1;
    }

    addToCarrito(article: Art) {
        if (this.cart.length === 0) {
            this.cart.unshift(article);
            this.observableCart.next(this.cart.length);
            this.showToast('1 ' + article.article + ' añadido al carrito!');
        } else {
            if (this.isAnOldArticle(article.article)) {
                this.cart[this.cart.indexOf(this.oldArt)].quantity =
                    this.cart[this.cart.indexOf(this.oldArt)].quantity + article.quantity;
                this.showToast('1 ' + article.article + ' añadido al carrito!, ahora hay ' +
                    this.cart[this.cart.indexOf(this.oldArt)].quantity);
            } else {
                this.cart.unshift(article);
                this.observableCart.next(this.cart.length);
                this.showToast('1 ' + article.article + ' añadido al carrito!');
            }
        }
        this.oldArt = null;
        console.log('obvscart', this.observableCart.getValue());
        console.log('Tamaño cart: (add) ' + this.cart.length);
        console.log('Tamaño item cart: (add) ' + this.cart[0].quantity);
    }

    removeFromCarrito(article: Art) {
        if (this.cart.length === 0) {
            console.log('1st if');
            this.showToast('No le des a quitar, no hay items de tipo ' + article.article + ' en el carro');
        } else {
            console.log('2nd if');
            if (this.isAnOldArticle(article.article)) {
                this.cart[this.cart.indexOf(this.oldArt)].quantity =
                    this.cart[this.cart.indexOf(this.oldArt)].quantity - 1;
                this.showToast('1 ' + article.article + ' eliminado del carro, quedan ' +
                    this.cart[this.cart.indexOf(this.oldArt)].quantity);
                console.log('Tamaño item cart: (remove) ' + this.cart[0].quantity);
                if (this.cart[this.cart.indexOf(this.oldArt)].quantity === 0) {
                    this.cart.splice(this.cart.indexOf(this.oldArt), 1);
                    this.showToast('Ya no hay ningún item de ' + article.article + ', para por favor.');
                }
            }
        }
        this.oldArt = null;
        console.log('Tamaño cart: (remove) ' + this.cart.length);
    }

    isAnOldArticle(artName: string) {
        for (const value of this.cart) {
            if (artName === this.cart[this.cart.indexOf(value)].article) {
                this.oldArt = this.cart[this.cart.indexOf(value)];
                return true;
            }
        }
        return false;
    }

    async showToast(msg: string) {
        const toasting = await this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toasting.present();
    }
}
