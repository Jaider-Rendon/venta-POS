import { DetalleVenta } from './detalle-venta';
export class Producto {
    idProducto: number;
    nombre: string;
    precioUnitario: number;
    stock: number;
    descripcion: string;
    precioCompra: number;
    tipo: string;
    fechaVencimiento: Date;
    estado: string;  // Corregido
    DetalleVenta:DetalleVenta
}
