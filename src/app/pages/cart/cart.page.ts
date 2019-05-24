import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Art} from '../../interfaces/interface.cart';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    header: any;
    carrito: Art[] = [];

    constructor(private db: DatabaseService, private router: Router) {
        this.header = {title: 'Carrito', ismenu: true, showcart: false};
        this.carrito = db.getCart();
    }

    totalPricePerItem(price: number, quantity: number) {
        return 'Total price per item: €' + (price * quantity);
    }

    totalPrice() {
        let cant = 0;
        for (const value of this.carrito) {
            cant = cant + (value.price * value.quantity);
        }
        return 'Final total price: €' + cant;
    }

    cleanCarrito() {
        this.carrito.splice(0);
        this.db.cleanCart();
        this.db.showToast('All cart elements removed');
        this.router.navigateByUrl('/sidemenu/tabs/home');
    }

    buy() {
        this.carrito.splice(0);
        this.db.cleanCart();
        this.db.showToast('Thanks for money, muahaha!');
        this.router.navigateByUrl('/sidemenu/tabs/home');
    }

    ngOnInit() {
    }

}
