import { Factura } from './factura';
import { DetalleVenta } from './detalle-venta';
import { DetalleVentaConImpuestos } from './detalle-venta-con-impuestos';

export interface FacturaRespuesta {
  mensaje: string;
  factura: Factura;
  detalles: DetalleVentaConImpuestos[];
}
