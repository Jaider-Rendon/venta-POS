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
import { FacturaRespuesta } from '../entidad/factura-respuesta';


@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {

  Factura: Factura = new Factura();
  DetalleVentas: DetalleVenta[] = [];
  // Nueva lista de productos agregados
  
  DetalleVenta: DetalleVenta = new DetalleVenta();

  Vendedores: Vendedor[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  FacturaCompleta:FacturaCompleta[]=[]
  cedulaV: number;
  CedulaC: number;
  producto: number;
  mostrarBotonDescarga: boolean = false;

  constructor(
    private router: Router,
    private vendedorService: LoginVendedorService,
    private FacturaService: FacturaService
  ) {
    this.Factura.fechaFactura = new Date();
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
      `  ${i + 1}. ${d.producto?.nombre} - Cantidad: ${d.cantidad} - Precio: $${d.producto?.precioCompra}`
    ).join('\n')}
    `;
  
    alert(resumen);
  
    this.FacturaService.crearFactura(facturaCompleta).subscribe(
      (respuesta: FacturaRespuesta) => {
        console.log('Respuesta completa del backend:', respuesta);
  
        // Asignar la factura y detalles que vienen del backend
        this.Factura = respuesta.factura;
        this.DetalleVentas = respuesta.detalles;
  
        // Mostrar el botón de descarga del PDF
        this.mostrarBotonDescarga = true;
  
        alert(respuesta.mensaje); // Mostrar mensaje del backend
      },
      error => {
        console.error("Error al crear la factura", error);
        alert("Error al crear la factura. Verifica los datos.");
      }
    );
  }
  

  generarPDF() {
    const doc = new jsPDF();
    const factura = this.Factura;
    const detalles = this.DetalleVentas;
  
    // Título
    doc.setFontSize(18);
    doc.text('Factura de Venta', 14, 22);
  
    let y = 32; // Y inicial para los datos
  
    // Datos generales
    doc.setFontSize(12);
    doc.text(`Fecha de Expedición: ${new Date().toLocaleDateString()}`, 14, y);
    y += 8;
    doc.text(`Nro Factura: ${factura.idFactura}`, 14, y);
    y += 8;

    doc.text(`Vendedor: ${factura.vendedor?.nombre} - Cédula: ${factura.vendedor?.cedulaV}`, 14, y);
    y += 10;
    
    const nombreCliente = `${factura.cliente?.nombre1 || ''} ${factura.cliente?.nombre2 || ''} ${factura.cliente?.apellido1 || ''} ${factura.cliente?.apellido2 || ''}`.trim();
    doc.text(`Cliente: ${nombreCliente} - Cédula: ${factura.cliente?.cedulaC}`, 14, y);
    y += 8;
     
    doc.text(`Dirección: ${factura.cliente?.direccion} - email: ${factura.cliente?.correo}`, 14, y);
    y += 10;


    
  
    // Tabla de productos
    const tabla = detalles.map((d) => [
      d.producto?.nombre,
      `$${d.producto?.precioCompra}`,
      d.cantidad,
      `$${(d.producto?.precioCompra || 0) * (d.cantidad || 0)}`
    ]);
  
    autoTable(doc, {
      head: [['Producto', 'Precio', 'Cantidad', 'Subtotal']],
      body: tabla,
      startY: y
    });
  
    const total = detalles.reduce((sum, d) =>
      sum + (d.producto?.precioCompra || 0) * (d.cantidad || 0), 0
    );
  
    // Total después de la tabla
    const finalY = (doc as any).lastAutoTable.finalY || y;
    doc.text(`Total: $${total.toFixed(2)}`, 14, finalY + 10);
  
    doc.save('factura.pdf');
  }
  

    
    
}
