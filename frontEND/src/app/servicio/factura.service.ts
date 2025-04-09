import { FacturaCompleta } from './../entidad/factura-completa';
import { FacturaRespuesta } from './../entidad/factura-respuesta';

import { DetalleVenta } from './../entidad/detalle-venta';
import { Factura } from './../entidad/factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteDiarioC } from '../entidad/reporte-diario-c';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private bdURl = 'http://localhost:8080/Factura/guardar';

  constructor(private  httpClient: HttpClient) { }

  crearFactura(FacturaCompleta: FacturaCompleta): Observable<FacturaRespuesta> {
    return this.httpClient.post<FacturaRespuesta>(`${this.bdURl}`, FacturaCompleta);
  }
  
  buscarProducto(idPro:number,nombre:string):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/Producto/buscar?idPro=${idPro}&nombre=${nombre}`);
  }
reporteDiario(cedulav:number,fecha:Date):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/Factura/reporteDiarioV?cedula=${cedulav}&fecha=${fecha}`);

}
reporteDiarioC(cedulac:number,fecha:Date):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/Factura/reporteDiarioC?cedula=${cedulac}&fecha=${fecha}`);

}
reporteMensual(cedulav:number,fecha:string):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/Factura/reporteMensualV?cedula=${cedulav}&fecha=${fecha}`);

}
reporteMensualC(cedulav:number,fecha:string):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/Factura/reporteMensualC?cedula=${cedulav}&fecha=${fecha}`);

}

reporteEntreFechas(fechaInicio: Date, fechaFin: Date): Observable<any> {
  const inicioStr = fechaInicio.toISOString().split('T')[0]; // yyyy-MM-dd
  const finStr = fechaFin.toISOString().split('T')[0];

  return this.httpClient.get(`http://localhost:8080/Factura/reporteEntreFechas`, {
    params: {
      inicio: inicioStr,
      fin: finStr
    }
  });
}





}
