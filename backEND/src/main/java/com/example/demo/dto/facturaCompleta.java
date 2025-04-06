package com.example.demo.dto;

import java.util.List;

import com.example.demo.modelo.Factura;
import com.example.demo.modelo.detalleVenta;

public class facturaCompleta {

	private Factura factura;
    private List<detalleVenta> detalles;

    // Getters y Setters
    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public List<detalleVenta> getDetalles() {
        return detalles;
    }

    public void setDetalles(List<detalleVenta> detalles) {
        this.detalles = detalles;
    }
}

