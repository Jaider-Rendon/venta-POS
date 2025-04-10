import { Factura } from "./factura";
import { Impuesto } from "./impuesto";
import { Producto } from "./producto";

export class DetalleVentaConImpuestos {
    producto: Producto;
    cantidad: number;
    impuestos: Impuesto[];
    factura?: Factura;

}
