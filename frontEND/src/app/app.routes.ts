import { Routes } from "@angular/router";
import { VendedorComponent } from './vendedor/vendedor.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { RegistroComponent } from "./registro/registro.component";
import { AdministradorComponent } from "./administrador/administrador.component";
import { LoginAdmininComponent } from "./login-adminin/login-adminin.component";
import { VentasDiariasComponent } from "./ventas-diariasV/ventas-diariasV.component";
import { ProductosTipoComponent } from "./productos-tipo/productos-tipo.component";
import { VentaFechasComponent } from "./venta-fechas/venta-fechas.component";
import { VentasMensualesComponent } from "./ventas-mensuales/ventas-mensuales.component";
import { GestionImpuestosComponent } from "./gestion-impuestos/gestion-impuestos.component";

export const routes: Routes = [
    { path: '', redirectTo: 'loginvendedor', pathMatch: 'full' }, 
    { path: 'Vendedor', component: VendedorComponent },
    { path: 'loginvendedor', component: LoginVendedorComponent },
    {path:'registro',component:RegistroComponent},
    {path: 'Administrador',component:AdministradorComponent},
    {path: 'loginAdmi',component:LoginAdmininComponent},
    {path: 'ventas-diarias',component:VentasDiariasComponent},
    {path:'productosTipo',component:ProductosTipoComponent},
    {path:'ventaFechas',component:VentaFechasComponent},
    {path:'ventas-mensuales',component:VentasMensualesComponent},
    {path:'gestionImpuestos',component:GestionImpuestosComponent}
];
