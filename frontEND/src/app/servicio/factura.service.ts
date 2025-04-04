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

  crearFactura(Factura:Factura):Observable<any>{
    return this.httpClient.post(`${this.bdURl}`,Factura);
  }
  buscarProducto(idPro:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/Producto/buscar?idPro=${idPro}`);
  }

  buscarFactura(idFactura:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/Factura/buscar?idF=${idFactura}`);
  }

  detalleVenta(DetalleVenta:DetalleVenta):Observable<any>{
return this.httpClient.post(`http://localhost:8080/Detalle_venta/guardar`,DetalleVenta)
  }
}
