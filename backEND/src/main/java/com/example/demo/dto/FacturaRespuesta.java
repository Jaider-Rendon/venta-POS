package com.example.demo.dto;

import java.util.List;
import com.example.demo.modelo.Factura;

public class FacturaRespuesta {
    private String mensaje;
    private Factura factura;
    private List<detalleVentaConImpuestos> detalles;

    // Getters y setters
    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public List<detalleVentaConImpuestos> getDetalles() {
        return detalles;
    }

    public void setDetalles(List<detalleVentaConImpuestos> detalles) {
        this.detalles = detalles;
    }
}
