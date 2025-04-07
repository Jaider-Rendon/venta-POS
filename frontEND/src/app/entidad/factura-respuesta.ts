import { Factura } from './factura';
import { DetalleVenta } from './detalle-venta';

export interface FacturaRespuesta {
  mensaje: string;
  factura: Factura;
  detalles: DetalleVenta[];
}
