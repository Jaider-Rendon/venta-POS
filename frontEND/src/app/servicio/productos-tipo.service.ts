import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../entidad/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosTipoService {

  private baseUrl = 'http://localhost:8080/Producto'; 

  constructor(private http: HttpClient) { }

  buscarProductosPorTipo(tipo: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/buscarPorTipo?tipo=${tipo}`);
}

}