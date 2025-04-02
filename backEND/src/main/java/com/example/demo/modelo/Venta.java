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
@Table(name = "Venta")
public class Venta {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idVenta")
    private Long idVenta;
	
	@ManyToOne
	 @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
	    private  Producto Producto;
	
	@ManyToOne
	 @JoinColumn(name = "idFactura", referencedColumnName = "idFactura")
	    private  Factura Factura;

	public Venta() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Venta(Long idVenta, com.example.demo.modelo.Producto producto, com.example.demo.modelo.Factura factura) {
		super();
		this.idVenta = idVenta;
		Producto = producto;
		Factura = factura;
	}

	public Long getIdVenta() {
		return idVenta;
	}

	public void setIdVenta(Long idVenta) {
		this.idVenta = idVenta;
	}

	public Producto getProducto() {
		return Producto;
	}

	public void setProducto(Producto producto) {
		Producto = producto;
	}

	public Factura getFactura() {
		return Factura;
	}

	public void setFactura(Factura factura) {
		Factura = factura;
	}
	

}
