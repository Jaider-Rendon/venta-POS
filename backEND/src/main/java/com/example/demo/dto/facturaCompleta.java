package com.example.demo.dto;

import java.util.List;

import com.example.demo.modelo.Factura;
import com.example.demo.modelo.DetalleVenta;

public class facturaCompleta {

	private Factura factura;
    private List<DetalleVenta> detalles;

    // Getters y Setters
    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public List<DetalleVenta> getDetalles() {
        return detalles;
    }

    public void setDetalles(List<DetalleVenta> detalles) {
        this.detalles = detalles;
    }
}

