package com.example.demo.modelo;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
	@JoinColumn(name = "factura_id")
	@JsonBackReference
	private Factura factura;
	
	@Column(name="cantidad")
	private Long cantidad;
	


	public detalleVenta() {
		super();
		// TODO Auto-generated constructor stub
	}



	public detalleVenta(Long idVenta, com.example.demo.modelo.Producto producto, Factura factura, Long cantidad) {
		super();
		this.idVenta = idVenta;
		Producto = producto;
		this.factura = factura;
		this.cantidad = cantidad;
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
		return factura;
	}



	public void setFactura(Factura factura) {
		this.factura = factura;
	}



	public Long getCantidad() {
		return cantidad;
	}



	public void setCantidad(Long cantidad) {
		this.cantidad = cantidad;
	}



}