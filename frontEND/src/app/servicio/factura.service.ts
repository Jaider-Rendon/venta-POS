import { FacturaCompleta } from './../entidad/factura-completa';
import { DetalleVenta } from './../entidad/detalle-venta';
import { Factura } from './../entidad/factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private bdURl = 'http://localhost:8080/Factura/guardar';

  constructor(private  httpClient: HttpClient) { }

  crearFactura(FacturaCompleta: FacturaCompleta): Observable<any> {
    return this.httpClient.post(`${this.bdURl}`, FacturaCompleta);
  }
  buscarProducto(idPro:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/Producto/buscar?idPro=${idPro}`);
  }
reporteDiario(cedulav:number,fecha:Date):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/Factura/reporteDiarioV?cedula=${cedulav}&fecha=${fecha}`);

}
reporteDiarioC(cedulav:number,fecha:Date):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/Factura/reporteDiarioC?cedula=${cedulav}&fecha=${fecha}`);

}

}
