import { FacturaCompleta } from './../entidad/factura-completa';
import { FacturaService } from './../servicio/factura.service';
import { Vendedor } from './../entidad/vendedor';
import { DetalleVenta } from './../entidad/detalle-venta';
import { Factura } from './../entidad/factura';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginVendedorService } from '../servicio/login-vendedor.service';
import { Cliente } from '../entidad/cliente';
import { Producto } from '../entidad/producto';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent {

  Factura: Factura = new Factura();
  DetalleVentas: DetalleVenta[] = [];
  DetalleVenta: DetalleVenta = new DetalleVenta();

  Vendedores: Vendedor[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  FacturaCompleta: FacturaCompleta[] = [];

  cedulaV: number;
  CedulaC: number;
  producto: number;
  mostrarBotonDescarga: boolean = false;

  constructor(
    private router: Router,
    private vendedorService: LoginVendedorService,
    private FacturaService: FacturaService
  ) {
    this.Factura.total = 0;
  }

  Registro() {
    this.router.navigate(['/registro']);
  }

  vendedor() {
    this.vendedorService.buscar(this.cedulaV).subscribe(
      dato => {
        this.Vendedores = Array.isArray(dato) ? dato : [dato];
        console.log("Vendedor encontrado:", this.Vendedores);
      },
      error => {
        console.error('Error al obtener el vendedor', error);
        this.Vendedores = [];
      }
    );
  }

  cliente() {
    this.vendedorService.buscar1(this.CedulaC).subscribe(
      dato => {
        this.clientes = Array.isArray(dato) ? dato : [dato];
        console.log("Cliente encontrado:", this.clientes);
      },
      error => {
        console.error("Error al obtener el cliente", error);
        this.clientes = [];
      }
    );
  }

  buscarProducto() {
    this.FacturaService.buscarProducto(this.producto).subscribe(
      dato => {
        this.productos = Array.isArray(dato) ? dato : [dato];
        console.log("Productos encontrados:", this.productos);
      },
      error => {
        console.error("Error al obtener el producto", error);
        this.productos = [];
      }
    );
  }

  agregarProducto() {
    const nuevoDetalle = new DetalleVenta();
    nuevoDetalle.producto = this.DetalleVenta.producto;
    nuevoDetalle.cantidad = this.DetalleVenta.cantidad;
    nuevoDetalle.factura = this.Factura;

    this.DetalleVentas.push(nuevoDetalle);

    // Limpiar campos después de agregar
    this.DetalleVenta = new DetalleVenta();
  }

  crearFacturaCompleta() {
    this.Factura.fechaFactura = new Date();
    
    const facturaCompleta: FacturaCompleta = {
      factura: this.Factura,
      detalles: this.DetalleVentas
    };

    // Crear un resumen visual para el alert
    const totalVisual = facturaCompleta.detalles.reduce((sum, d) => {
      return sum + (d.producto?.precioCompra || 0) * (d.cantidad || 0);
    }, 0);

    const resumen = `
Factura:
  Cliente: ${facturaCompleta.factura.cliente?.nombre1} - Cédula: ${facturaCompleta.factura.cliente?.cedulaC}
  Vendedor: ${facturaCompleta.factura.vendedor?.nombre} - Cédula: ${facturaCompleta.factura.vendedor?.cedulaV}
  Total: $${totalVisual.toFixed(2)}

Detalles:
${facturaCompleta.detalles.map((d, i) => 
  `  ${i + 1}. ${d.producto?.nombre} - Cantidad: ${d.cantidad} - Precio Unitario: $${d.producto?.precioCompra}`
).join('\n')}
    `;

    alert(resumen);

    this.FacturaCompleta.push(facturaCompleta);
    this.mostrarBotonDescarga = true;
  }

  descargarFactura() {
    if (this.FacturaCompleta.length === 0) return;

    const facturaCompleta = this.FacturaCompleta[this.FacturaCompleta.length - 1];

    const doc = new jsPDF();

    doc.text('Factura', 14, 20);
    doc.text(`Cliente: ${facturaCompleta.factura.cliente?.nombre1} - Cédula: ${facturaCompleta.factura.cliente?.cedulaC}`, 14, 30);
    doc.text(`Vendedor: ${facturaCompleta.factura.vendedor?.nombre} - Cédula: ${facturaCompleta.factura.vendedor?.cedulaV}`, 14, 40);

    autoTable(doc, {
      startY: 50,
      head: [['Producto', 'Cantidad', 'Precio Unitario']],
      body: facturaCompleta.detalles.map(d => [
        d.producto?.nombre || '',
        d.cantidad?.toString() || '',
        `$${d.producto?.precioCompra?.toFixed(2) || '0.00'}`
      ])
    });

    const total = facturaCompleta.detalles.reduce((sum, d) => {
      return sum + (d.producto?.precioCompra || 0) * (d.cantidad || 0);
    }, 0);

    doc.text(`Total: $${total.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save('factura.pdf');
  }
}
