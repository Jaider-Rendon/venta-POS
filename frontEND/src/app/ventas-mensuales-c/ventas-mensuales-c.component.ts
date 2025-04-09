import { Component } from '@angular/core';
import { ReporteDiarioC } from '../entidad/reporte-diario-c';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FacturaService } from '../servicio/factura.service';

@Component({
  selector: 'app-ventas-mensuales-c',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-mensuales-c.component.html',
  styleUrl: './ventas-mensuales-c.component.css'
})
export class VentasMensualesCComponent {
  cedulaC: number;
  fecha:string;
  ReporteDiarioC:ReporteDiarioC[] = [];

  constructor(private router: Router,private FacturaService: FacturaService) {
    
      
        }
  Impuestos() {
    this.router.navigate(['/gestionImpuestos']);
        }
    Volver() {
      this.router.navigate(['/ventas-mensuales']);
        }

        reporteMensualC() {
          // Validar que la cédula solo contenga números
          if (!/^\d+$/.test(this.cedulaC?.toString())) {
            alert('La cédula solo debe contener números.');
            return;
          }
        
          this.FacturaService.reporteMensualC(this.cedulaC, this.fecha).subscribe(
            dato => {
              if (dato.length === 0) {
                alert('No hay ventas registradas en el mes seleccionado.');
              }
              this.ReporteDiarioC = dato;
              console.log(dato);
              this.ReporteDiarioC.sort((a, b) => a.id_factura - b.id_factura);
            },
            error => {
              console.error('Error al obtener el reporte mensual de cliente:', error);
              alert('Ocurrió un error al consultar el reporte.');
            }
          );
        }
}
