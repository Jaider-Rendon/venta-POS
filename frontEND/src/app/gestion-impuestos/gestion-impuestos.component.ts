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
        this.ProductosTipoService.buscarProducto(this.producto).subscribe(dato => {
          console.log('Dato recibido:', dato);
          if (dato && dato.length > 0) {
            this.productos = dato;
          } else {
            alert('No se encontró ningún producto con ese ID.');
            this.productos = [];
          }
        }, error => {
          console.error('Error en la búsqueda:', error);
          alert('Error al buscar producto.');
        });
      }
      
      gestionarImpuesto(){
        this.ProductosTipoService.gestionarImpuestos(this.producto,this.impuesto).subscribe(dato=>{
          this.mostrarProductos();
          if(dato=true){
alert("Se ha actualizado el impuesto existosamente")
          }else{
            alert("Ha ocurrido un error no se pudo actualizar el impuesto")
          }
        })

      }

      
}
