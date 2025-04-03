import { Routes } from "@angular/router";
import { VendedorComponent } from './vendedor/vendedor.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { RegistroComponent } from "./registro/registro.component";

export const routes: Routes = [
    { path: '', redirectTo: 'loginvendedor', pathMatch: 'full' }, 
    { path: 'Vendedor', component: VendedorComponent },
    { path: 'loginvendedor', component: LoginVendedorComponent },
    {path:'registro',component:RegistroComponent}
];
