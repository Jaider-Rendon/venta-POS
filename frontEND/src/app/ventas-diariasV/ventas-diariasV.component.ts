import { ReporteDiario } from '../entidad/reporte-diario';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaService } from '../servicio/factura.service';

@Component({
  selector: 'app-ventas-diarias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-diariasV.component.html',
  styleUrl: './ventas-diariasV.component.css'
})
export class VentasDiariasComponent {

  cedulaV: number;
  fecha:Date;
  ReporteDiario:ReporteDiario[] = [];

    constructor(private router: Router,private FacturaService: FacturaService) {

  
    }
  
  Impuestos() {
    this.router.navigate(['/gestionImpuestos']);
  }
  Volver() {
    this.router.navigate(['/Administrador']);
  }
  reporteDiarioC() {
    this.router.navigate(['/ventas-diariasC']);
  }
  reporteDiarioV(){
    this.FacturaService.reporteDiario(this.cedulaV,this.fecha).subscribe(
      dato => {
        this.ReporteDiario=dato;
        console.log(dato);
        this.ReporteDiario.sort((a, b) => a.id_factura - b.id_factura);

      }
    )}
}
