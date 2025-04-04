import { Factura } from './factura';
import { Producto } from './producto';
export class DetalleVenta {
    idVenta:number;
    producto:Producto;
    factura:Factura;
    cantidad:number;
}
