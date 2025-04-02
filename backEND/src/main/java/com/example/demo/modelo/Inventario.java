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
@Table(name = "Inventario")

public class Inventario {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "idInventario")
	    private Long idInventario;
	 
	 @Column(name = "cantidad")
		private Long cantidad;
	 
	 @ManyToOne
	 @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
	    private  Producto Producto;

	public Inventario() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Inventario(Long idInventario, Long cantidad, com.example.demo.modelo.Producto producto) {
		super();
		this.idInventario = idInventario;
		this.cantidad = cantidad;
		Producto = producto;
	}

	public Long getIdInventario() {
		return idInventario;
	}

	public void setIdInventario(Long idInventario) {
		this.idInventario = idInventario;
	}

	public Long getCantidad() {
		return cantidad;
	}

	public void setCantidad(Long cantidad) {
		this.cantidad = cantidad;
	}

	public Producto getProducto() {
		return Producto;
	}

	public void setProducto(Producto producto) {
		Producto = producto;
	}
	 

}
