import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReporteDiarioC } from '../entidad/reporte-diario-c';
import { Router } from '@angular/router';
import { FacturaService } from '../servicio/factura.service';

@Component({
  selector: 'app-venta-fechas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './venta-fechas.component.html',
  styleUrl: './venta-fechas.component.css'
})
export class VentaFechasComponent {
  cedulaV: number;
  fecha:string;
  ReporteDiario:ReporteDiarioC[] = [];
  fechaInicio!: string;
  fechaFin!: string;
  paginaActual: number = 1;
  elementosPorPagina: number = 15;
  
    constructor(private router: Router,private FacturaService: FacturaService) {
  
    
      }
    
      get totalPaginas(): number {
        return Math.ceil(this.ReporteDiario.length / this.elementosPorPagina);
      }
      
      get reportePaginado(): ReporteDiarioC[] {
        const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
        const fin = inicio + this.elementosPorPagina;
        return this.ReporteDiario.slice(inicio, fin);
      }

    Impuestos() {
      this.router.navigate(['/gestionImpuestos']);
    }
  
    Volver() {
      this.router.navigate(['/Administrador']);
    }
   
   
    
    generarReporteRango() {
      if (this.fechaInicio && this.fechaFin) {
        const inicio = new Date(this.fechaInicio);
        const fin = new Date(this.fechaFin);
    
        if (isNaN(inicio.getTime()) || isNaN(fin.getTime())) {
          alert('Fechas inválidas');
          return;
        }
    
        this.FacturaService.reporteEntreFechas(inicio, fin).subscribe(data => {
          if (data.length === 0) {
            alert("No hay reporte de ventas en las fechas seleccionadas");
            this.ReporteDiario = []; // limpiar el arreglo si es necesario
          } else {
            this.ReporteDiario = data;
          }
        }, error => {
          console.error("Error al obtener el reporte:", error);
          alert("Hubo un error al obtener el reporte de ventas.");
        });
      } else {
        alert("Debes ingresar ambas fechas para generar el reporte.");
      }
    }
    
    
    
    }

