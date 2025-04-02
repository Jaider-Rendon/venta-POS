import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginVendedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEND';
}
