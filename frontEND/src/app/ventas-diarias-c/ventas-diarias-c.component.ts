import { Component } from '@angular/core';
import { ReporteDiario } from '../entidad/reporte-diario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacturaService } from '../servicio/factura.service';
import { Router } from '@angular/router';
import { ReporteDiarioC } from '../entidad/reporte-diario-c';

@Component({
  selector: 'app-ventas-diarias-c',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-diarias-c.component.html',
  styleUrl: './ventas-diarias-c.component.css'
})
export class VentasDiariasCComponent {

  cedulaC: number;
    fecha:Date;
    ReporteDiarioC:ReporteDiarioC[] = [];

constructor(private FacturaService: FacturaService,private router: Router) {

    }
    Impuestos() {
      this.router.navigate(['/gestionImpuestos']);
    }
    Volver() {
      this.router.navigate(['/ventas-diarias']);
    }

reporteDiarioC(){
  this.FacturaService.reporteDiarioC(this.cedulaC,this.fecha).subscribe(
    dato => {
      this.ReporteDiarioC=dato;
      console.log(dato);
      this.ReporteDiarioC.sort((a, b) => a.id_factura - b.id_factura);

    }
  )}
}
