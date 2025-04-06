import { Vendedor } from './vendedor';
import { Cliente } from "./cliente";
import { DetalleVenta } from './detalle-venta';

export class Factura {
    idFactura:number;
    fechaFactura:Date;
    cliente: Cliente;  // ← Ahora coincide con Java
    vendedor: Vendedor; // ← Ahora coincide con Java
    total:number;
}
