import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReporteDiarioC } from '../entidad/reporte-diario-c';
import { Router } from '@angular/router';
import { FacturaService } from '../servicio/factura.service';

@Component({
  selector: 'app-ventas-mensuales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-mensuales.component.html',
  styleUrl: './ventas-mensuales.component.css'
})
export class VentasMensualesComponent {
  cedulaV: number;
  fecha:string;
  ReporteDiario:ReporteDiarioC[] = [];

    constructor(private router: Router,private FacturaService: FacturaService) {
  
    
      }
    
    Impuestos() {
      this.router.navigate(['/gestionImpuestos']);
    }
    reporteMensualC() {
      this.router.navigate(['/ventas-mensualesC']);
    }
    Volver() {
      this.router.navigate(['/Administrador']);
    }
    reporteMensualV() {
      // Validar que la cédula solo contenga números
      if (!/^\d+$/.test(this.cedulaV?.toString())) {
        alert('La cédula solo debe contener números.');
        return;
      }
    
      this.FacturaService.reporteMensual(this.cedulaV, this.fecha).subscribe(
        dato => {
          if (dato.length === 0) {
            alert('No hay ventas registradas en el mes seleccionado.');
          }
          this.ReporteDiario = dato;
          console.log(dato);
          this.ReporteDiario.sort((a, b) => a.id_factura - b.id_factura);
        },
        error => {
          console.error('Error al obtener el reporte mensual:', error);
          alert('Ocurrió un error al consultar el reporte.');
        }
      );
    }    
    }

