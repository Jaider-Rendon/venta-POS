import { DetalleVenta } from './../entidad/detalle-venta';
import { Factura } from './../entidad/factura';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginVendedorService } from '../servicio/login-vendedor.service';


@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {

Factura: Factura=new Factura();
DetalleVenta: DetalleVenta=new DetalleVenta();
cedulaV:number
CedulaC:number

  constructor(private router: Router,private vendedorService: LoginVendedorService) {
    this.Factura.fechaFactura = new Date(); 
  }
  

  Registro() {
    this.router.navigate(['/registro']); 
  }
  vendedor() {
    this.vendedorService.buscar(this.cedulaV).subscribe(dato => {
      alert(JSON.stringify(dato, null, 2));  // Formato legible
      console.log(dato);
    
    });

  }
  cliente(){
    this.vendedorService.buscar1(this.CedulaC).subscribe(dato => {
      alert(JSON.stringify(dato, null, 2));  
      console.log(dato);
    
    });
  }
}