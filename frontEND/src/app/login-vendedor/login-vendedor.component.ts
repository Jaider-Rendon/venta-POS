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
  this.LoginVendedorService.login(usuario, clavead).subscribe(dato => {
    console.log(dato);
    if (dato === true) {
      console.log("genial")
        this.Router.navigate(['/Vendedor']);
    }else {
      alert("Datos incorrectos"); 
    }
  });

  
}
admini(){
  this.Router.navigate(['/loginAdmi'])
}
}
