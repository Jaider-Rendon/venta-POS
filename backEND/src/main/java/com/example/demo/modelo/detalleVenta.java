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
@Table(name = "detalleVenta")
public class detalleVenta {
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
	
	 @Column(name = "total")
	    private Long total;

	public detalleVenta() {
		super();
		// TODO Auto-generated constructor stub
	}

	public detalleVenta(Long idVenta, com.example.demo.modelo.Producto producto,
			com.example.demo.modelo.Factura factura, Long total) {
		super();
		this.idVenta = idVenta;
		Producto = producto;
		Factura = factura;
		this.total = total;
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

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

}