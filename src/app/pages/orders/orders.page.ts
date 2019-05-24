import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Pedidos} from '../../interfaces/interface.pedidos';
import {Router} from '@angular/router';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
    header: any;
    pedidos: Pedidos[] = [];

    constructor(private db: DatabaseService,
                private router: Router) {
        this.header = {title: 'Orders', ismenu: true, showcart: true};
        this.db.loadPedidosTable().subscribe(peds => {
            this.pedidos = peds as Pedidos[];
        });
    }

    finalizar(pedido: Pedidos) {
        this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
        this.db.showToast(pedido.nombre + ' finalizado');
        if (this.pedidos.length === 0) {
            this.db.showToast('Ya no quedan pedidos, volviendo a página anterior...');
            this.router.navigateByUrl('/sidemenu/tabs/home');
        }
    }

    ngOnInit() {
    }

}
