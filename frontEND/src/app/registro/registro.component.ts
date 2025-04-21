import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../entidad/cliente';
import { RegistroService } from '../servicio/registro.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  cliente: Cliente = new Cliente();
  

  constructor(private registroService: RegistroService, private router: Router) {}

  guardar() {
    if (
      !this.cliente.cedulaC ||
      !this.cliente.nombre1 ||
      !this.cliente.apellido1 ||
      !this.cliente.telefono ||
      !this.cliente.direccion ||
      !this.cliente.correo
    ) {
      alert('⚠️ Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    const soloNumeros = /^[0-9]+$/;
    if (!soloNumeros.test(this.cliente.cedulaC.toString())) {
      alert('⚠️ El número de identificación solo debe contener números.');
      return;
    }
  
    if (!soloNumeros.test(this.cliente.telefono.toString())) {
      alert('⚠️ El teléfono debe contener solo números.');
      return;
    }
  
    this.registroService.registroCliente(this.cliente).subscribe(
      (respuesta) => {
        alert('✅ Cliente registrado correctamente');
        this.router.navigate(['/Vendedor']);
      },
      (error) => {
        console.error('Error al registrar el cliente:', error);
  
        const mensaje = error.error?.mensaje || error.message || '';
  
        if (error.status === 409 || mensaje.includes('ya existe') || mensaje.includes('identificación ya registrada')) {
          alert('❌ Este cliente ya existe en el sistema.');
          this.router.navigate(['/Vendedor']);
        } else {
          alert('❌ Error al registrar el cliente.');
        }
      }
    );
  }
  
  
}


