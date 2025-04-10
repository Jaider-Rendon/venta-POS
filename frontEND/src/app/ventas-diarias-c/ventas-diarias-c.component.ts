import { Component } from '@angular/core';
import { ReporteDiarioC } from '../entidad/reporte-diario-c';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacturaService } from '../servicio/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-diarias-c',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-diarias-c.component.html',
  styleUrl: './ventas-diarias-c.component.css'
})
export class VentasDiariasCComponent {

  cedulaC: number;
  fecha: Date;
  ReporteDiarioC: ReporteDiarioC[] = [];
  paginaActual: number = 1;
elementosPorPagina: number = 15;


  constructor(private FacturaService: FacturaService, private router: Router) {}


  
get totalPaginas(): number {
  return Math.ceil(this.ReporteDiarioC.length / this.elementosPorPagina);
}

get reportePaginado(): ReporteDiarioC[] {
  const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
  const fin = inicio + this.elementosPorPagina;
  return this.ReporteDiarioC.slice(inicio, fin);
}

  Impuestos() {
    this.router.navigate(['/gestionImpuestos']);
  }

  Volver() {
    this.router.navigate(['/ventas-diarias']);
  }

  reporteDiarioC() {
    
    if (!/^\d+$/.test(this.cedulaC?.toString())) {
      alert('La cédula debe contener solo números.');
      return;
    }

 
    if (!this.fecha) {
      alert('Por favor seleccione una fecha.');
      return;
    }

    this.FacturaService.reporteDiarioC(this.cedulaC, this.fecha).subscribe(
      dato => {
        if (dato.length === 0) {
          alert('No se encontraron ventas para la fecha seleccionada.');
          this.ReporteDiarioC = [];
        } else {
          this.ReporteDiarioC = dato;
          console.log(dato);
          this.ReporteDiarioC.sort((a, b) => a.id_factura - b.id_factura);
        }
      },
      error => {
        console.error(error);
       
        alert('La cédula no corresponde a ningún Cliente.');
        this.ReporteDiarioC = [];
      }
    );
  }
}
