
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {

  constructor(private router: Router) {
    
  }

  Registro() {
    this.router.navigate(['/registro']); // Lo mismo aquí
  }
}
