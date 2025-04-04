import { Vendedor } from './vendedor';
import { Cliente } from "./cliente";

export class Factura {
    idFactura:number;
    fechaFactura:Date;
    cliente: Cliente;  // ← Ahora coincide con Java
    vendedor: Vendedor; // ← Ahora coincide con Java
    total:number;
}
