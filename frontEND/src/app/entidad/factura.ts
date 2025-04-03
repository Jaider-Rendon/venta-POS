import { Vendedor } from './vendedor';
import { Cliente } from "./cliente";

export class Factura {
    idFactura:number;
    fechaFactura:Date;
    Cliente:Cliente;
    Vendedor:Vendedor;
}
