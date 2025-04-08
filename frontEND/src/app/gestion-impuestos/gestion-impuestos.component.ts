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
  id: number;
  productos: ProductoI[] = [];
  
  constructor(private router: Router, private ProductosTipoService: ProductosTipoService,) {
  
      }

      volver(){
        this.router.navigate(['/Administrador']);
    
      }
      mostrarProductos(){
        this.ProductosTipoService.buscarProducto(this.id).subscribe(dato => {
          console.log('Dato recibido:', dato);
          this.productos = [dato]; // <-- esta es la línea correcta si dato es Producto[]
        });
      }
      gestionarImpuesto(id:number){
        this.mostrarProductos();
      }

      
}
