import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginVendedorService {

  private baseUrl = 'http://localhost:8080/Vendedor';
  private baseUrll = 'http://localhost:8080/Cliente';

  constructor(private  httpClient: HttpClient) {
   }
   login(usuario: string, clavead: number): Observable<any> {
    return this.httpClient.get(
      `${this.baseUrl}/login?usuario1=${encodeURIComponent(usuario)}&clavead1=${encodeURIComponent(clavead)}`
    );
  }
  buscar(cedula:number):Observable<any>{
    return this.httpClient.get( `${this.baseUrl}/buscar?cedulaV=${cedula}`);
  }
  buscar1(cedula:number):Observable<any>{
    return this.httpClient.get( `${this.baseUrll}/buscar1?cedulaC=${cedula}`);
  }
}



