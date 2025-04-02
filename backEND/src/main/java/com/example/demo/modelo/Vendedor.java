package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Vendedor")

public class Vendedor {
	@Id
	@Column(name="cedulaV")
	private Long cedulaV;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="clave")
	private Long clave;

	public Vendedor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendedor(Long cedulaV, String nombre, Long clave) {
		super();
		this.cedulaV = cedulaV;
		this.nombre = nombre;
		this.clave = clave;
	}

	public Long getCedulaV() {
		return cedulaV;
	}

	public void setCedulaV(Long cedulaV) {
		this.cedulaV = cedulaV;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getClave() {
		return clave;
	}

	public void setClave(Long clave) {
		this.clave = clave;
	}
	
	
}
