import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdministradorService {
  private baseUrl = 'http://localhost:8080/Administrador';

  constructor(private  httpClient: HttpClient) { }
  login(usuario: string, clavead: number): Observable<any> {
      return this.httpClient.get(
        `${this.baseUrl}/login?usuario1=${encodeURIComponent(usuario)}&clavead1=${encodeURIComponent(clavead)}`
      );
    }
}
