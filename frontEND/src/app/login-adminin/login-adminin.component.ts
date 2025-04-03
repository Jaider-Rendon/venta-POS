import { LoginAdministradorService } from './../servicio/login-administrador.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login-adminin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login-adminin.component.html',
  styleUrl: './login-adminin.component.css'
})
export class LoginAdmininComponent implements OnInit {
  loginForm: FormGroup;
  
    loginAdminForm: FormGroup;
    
      constructor (private fb: FormBuilder,
        private LoginAdministradorService:LoginAdministradorService,
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
    this.LoginAdministradorService.login(usuario, clavead).subscribe(dato => {
      console.log(dato);
      if (dato === true) {
        console.log("genial")
          this.Router.navigate(['/Administrador']);
      }else {
        alert("Datos incorrectos"); 
      }
    });
  
    
  }

}
