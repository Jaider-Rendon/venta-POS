import { DetalleVenta } from "./detalle-venta";
import { DetalleVentaConImpuestos } from "./detalle-venta-con-impuestos";
import { Factura } from "./factura";

export class FacturaCompleta {
    factura: Factura;
    detalles: DetalleVentaConImpuestos[];
}
