import { ReporteDiario } from './../entidad/reporte-diario';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaService } from './../servicio/factura.service';

@Component({
  selector: 'app-ventas-diarias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-diarias.component.html',
  styleUrl: './ventas-diarias.component.css'
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
  reporteDiarioV(){
    this.FacturaService.reporteDiario(this.cedulaV,this.fecha).subscribe(
      dato => {
        this.ReporteDiario=dato;
        console.log(dato);

      }
    )}
}
