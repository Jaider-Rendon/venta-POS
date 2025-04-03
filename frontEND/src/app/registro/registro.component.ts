import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../entidad/cliente';
import { RegistroService } from '../servicio/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  cliente: Cliente=new Cliente();
  ngOnInit(): void {
    
  }

  constructor(private registroService: RegistroService,private router: Router) {}
  
  guardar(){
    this.registroService.registroCliente(this.cliente).subscribe(dato => {
      console.log(dato);
      if (dato != null) {
        alert("Empleado Registrado");
        this.router.navigate(['/Vendedor']);
      } else {
        alert("Registro no guardado, faltan datos");
      }
    }, error => {
      alert("Error, faltan datos");
    });
    }
  }

