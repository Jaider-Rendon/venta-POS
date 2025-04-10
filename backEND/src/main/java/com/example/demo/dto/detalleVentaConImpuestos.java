package com.example.demo.dto;

import java.util.List;
import com.example.demo.modelo.Impuesto;
import com.example.demo.modelo.Producto;

public class detalleVentaConImpuestos {
    private Producto producto;
    private Long cantidad;
    private List<Impuesto> impuestos;

    // Getters y setters
    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Long getCantidad() {
        return cantidad;
    }

    public void setCantidad(Long cantidad) {
        this.cantidad = cantidad;
    }

    public List<Impuesto> getImpuestos() {
        return impuestos;
    }

    public void setImpuestos(List<Impuesto> impuestos) {
        this.impuestos = impuestos;
    }
}
