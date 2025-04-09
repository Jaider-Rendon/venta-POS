import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../entidad/producto';
import { ProductoI } from '../entidad/producto-i';

@Injectable({
  providedIn: 'root'
})
export class ProductosTipoService {

  private baseUrl = 'http://localhost:8080/Producto'; 

  constructor(private http: HttpClient) { }

  buscarProductosPorTipo(tipo: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/buscarPorTipo?tipo=${tipo}`);
}

buscarProductosPorTipo1(tipo: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/buscarPorTipo?tipo=${tipo}`);
}


buscarProducto(id:number): Observable<ProductoI> {
  return this.http.get<ProductoI>(`${this.baseUrl}/buscar?id=${id}`);
}

}