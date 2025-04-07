import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  constructor(private router: Router) {}

  irAReporte(event: any) {
    const valorSeleccionado = event.target.value;

    if (valorSeleccionado) {
      switch (valorSeleccionado) {
        case 'ventas-diarias':
          this.router.navigate(['/ventas-diarias']);
          break;
        case 'ventas-mensuales':
          this.router.navigate(['/ventas-mensuales']);
          break;
        case 'reporte-productos':
          this.router.navigate(['/productosTipo']);
          break;
        case 'reporte-fechas':
          this.router.navigate(['/ventaFechas']);
          break;
        default:
          break;
      }
    }
  }
}
