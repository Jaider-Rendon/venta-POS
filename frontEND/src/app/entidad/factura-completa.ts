import { DetalleVenta } from "./detalle-venta";
import { Factura } from "./factura";

export class FacturaCompleta {
    factura: Factura;
    detalles: DetalleVenta[];
}
