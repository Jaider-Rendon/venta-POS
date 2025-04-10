import { ProductosTipoService } from './../servicio/productos-tipo.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf y *ngFor
  // Para [(ngModel)]


import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-tipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos-tipo.component.html',
  styleUrls: ['./productos-tipo.component.css']
})
export class ProductosTipoComponent {
  tipoProducto: string = '';
  productos: any[] = [];

  constructor(
    private ProductosTipoService: ProductosTipoService,
    private router: Router // Corrijo aquí, estabas usando "Router: any" antes
  ) {}

  generarReporte() {
    const soloLetras = /^[a-zA-Z\s]+$/;

    if (this.tipoProducto.trim() !== '') {
      if (!soloLetras.test(this.tipoProducto)) {
        alert('Solo se permiten letras en el tipo de producto');
        return; // sale de la función si hay números
      }

      this.ProductosTipoService.buscarProductosPorTipo1(this.tipoProducto)
        .subscribe((data: any[]) => {
          this.productos = data;
          console.log(data)
          this.productos.sort((a, b) => a.id_factura - b.id_factura);

          if (this.productos.length === 0) {
            alert('No hay productos para este tipo');
          }
        }, error => {
          console.error('Error al obtener los productos:', error);
          alert('Ocurrió un error al buscar los productos');
        });
    } else {
      alert('Debe ingresar un tipo de producto');
    }
  }

  Impuestos() {
    this.router.navigate(['/gestionImpuestos']);
  }
  volver(){
    this.router.navigate(['/Administrador']);

  }
}
