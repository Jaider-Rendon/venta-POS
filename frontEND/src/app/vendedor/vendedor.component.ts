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

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {

  Factura: Factura = new Factura();
  DetalleVenta: DetalleVenta = new DetalleVenta();

  Vendedores: Vendedor[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  cedulaV: number;
  CedulaC: number;
  producto: number;

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

  factura() {
    this.FacturaService.crearFactura(this.Factura).subscribe(
      dato => {
        if (dato && dato.idFactura) {
          this.Factura.idFactura = dato.idFactura;
          console.log("Factura creada con ID:", this.Factura.idFactura);
        } else {
          console.error("No se recibió un ID de factura válido", dato);
        }
      },
      error => {
        console.error("Error al crear la factura", error);
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

  buscarFactura() {
    if (!this.Factura.idFactura) {
      console.error("ID de factura es inválido o null");
      return;
    }

    this.FacturaService.buscarFactura(this.Factura.idFactura).subscribe(
      dato => {
        if (dato) {
          this.DetalleVenta.factura = dato;
          console.log("Factura encontrada:", dato);
        } else {
          console.warn("No se encontró la factura con ID:", this.Factura.idFactura);
        }
      },
      error => {
        console.error("Error al buscar la factura", error);
      }
    );
  }

  detalleVenta() {
    if (!this.Factura.idFactura) {
      console.error("No se puede crear el detalle de venta porque el ID de factura es inválido.");
      return;
    }

    this.DetalleVenta.factura = this.Factura;

    this.FacturaService.detalleVenta(this.DetalleVenta).subscribe(
      dato => {
        console.log("Detalle de venta registrado:", dato);
      },
      error => {
        console.error("Error al registrar el detalle de venta", error);
      }
    );
  }
}
