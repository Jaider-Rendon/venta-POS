
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../entidad/cliente';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private bdURL ="http://localhost:8080/Registro/guardar";

  constructor(private httpClient:HttpClient) { }

  registroCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.bdURL}`,cliente);
  }
}
