import { LoginVendedorService } from './../servicio/login-vendedor.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login-vendedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login-vendedor.component.html',
  styleUrl: './login-vendedor.component.css'
})
export class LoginVendedorComponent implements OnInit {
  loginForm: FormGroup;

  loginAdminForm: FormGroup;
  
    constructor (private fb: FormBuilder,
      private LoginVendedorService:LoginVendedorService,
      private Router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      clavead: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  
}
validarLoginAd() {
  if (this.loginForm.invalid) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const { usuario, clavead } = this.loginForm.value;

  // Validar que usuario (cédula) solo tenga números
  const cedulaRegex = /^[0-9]+$/;
  if (!cedulaRegex.test(usuario)) {
    alert('La cédula solo debe contener números.');
    return;
  }

  // Validar que clave (contraseña) solo tenga letras y números
  const passwordRegex = /^[A-Za-z0-9]+$/;
  if (!passwordRegex.test(clavead)) {
    alert('La contraseña contiene caracteres inválidos.');
    return;
  }

  // Ahora sí, hacer la llamada al servicio
  this.LoginVendedorService.login(usuario, clavead).subscribe(
    dato => {
      console.log(dato);
      if (dato === true) {
        console.log("¡Genial! Usuario autenticado.");
        this.Router.navigate(['/Vendedor']);
      } else {
        alert("credenciales invalidas");
      }
    },
    error => {
      console.error('Error al intentar iniciar sesión:', error);
      alert('Error en el servidor. Inténtalo más tarde.');
    }
  );
}

admini(){
  this.Router.navigate(['/loginAdmi'])
}
}
