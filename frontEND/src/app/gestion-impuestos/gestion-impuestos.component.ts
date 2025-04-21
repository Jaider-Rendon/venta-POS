import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosTipoService } from './../servicio/productos-tipo.service';
import { ProductoI } from '../entidad/producto-i';

@Component({
  selector: 'app-gestion-impuestos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-impuestos.component.html',
  styleUrl: './gestion-impuestos.component.css'
})
export class GestionImpuestosComponent {

  impuesto:number;
  producto:string;
  productos: ProductoI[] = [];
  
  constructor(private router: Router, private ProductosTipoService: ProductosTipoService,) {
  
      }

      volver(){
        this.router.navigate(['/Administrador']);
    
      }

      mostrarProductos() {
        // Validar si el tipo de producto tiene solo letras
        if (!/^[a-zA-Z\s]+$/.test(this.producto)) {
          alert('El tipo del producto debe contener solo letras.');
          return;
        }
    
        this.ProductosTipoService.buscarProducto(this.producto).subscribe(
          dato => {
            console.log('Dato recibido:', dato);
            if (dato && dato.length > 0) {
              this.productos = dato;
            } else {
              alert('Producto no encontrado.');
              this.productos = [];
            }
          },
          error => {
            console.error('Error en la búsqueda:', error);
            alert('Error al buscar producto.');
          }
        );
      }
      
      gestionarImpuesto() {
        // Validar si hay cambios
        if (!this.producto || this.impuesto == null) {
          alert("No se han realizado cambios");
          return;
        }
      
        // Validar rango del impuesto
        if (this.impuesto < 0 || this.impuesto > 100) {
          alert("Ingrese un número entre 0% y 100%");
          return;
        }
      
        // Actualizar
        this.ProductosTipoService.gestionarImpuestos(this.producto, this.impuesto).subscribe(dato => {
          this.mostrarProductos();
          if (dato === true) {
            alert("Impuestos actualizados correctamente.");
          } else {
            alert("Ha ocurrido un error, no se pudo actualizar el impuesto");
          }
        });
      }
      
      

      
}
