package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "AsignarImpuesto")
public class AsignarImpuesto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAsg")
    private Long idAsg;

    @ManyToOne
    @JoinColumn(name = "idImpuesto", referencedColumnName = "idImpuesto")
    private Impuesto impuesto;

    @ManyToOne
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    private Producto producto;

    public AsignarImpuesto() {
        // Constructor vacío
    }

    public AsignarImpuesto(Long idAsg, Impuesto impuesto, Producto producto) {
        this.idAsg = idAsg;
        this.impuesto = impuesto;
        this.producto = producto;
    }

    public Long getIdAsg() {
        return idAsg;
    }

    public void setIdAsg(Long idAsg) {
        this.idAsg = idAsg;
    }

    public Impuesto getImpuesto() {
        return impuesto;
    }

    public void setImpuesto(Impuesto impuesto) {
        this.impuesto = impuesto;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
