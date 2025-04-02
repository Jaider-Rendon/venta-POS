package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cliente")

public class Cliente {
	@Id
	@Column(name="cedulaC")
	private Long cedulaC;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="telefono")
	private Long telefono;
	
	@Column(name="correo")
	private String correo;
	
	@Column(name="direccion")
	private String direccion;

	public Cliente() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cliente(Long cedulaC, String nombre, Long telefono, String correo, String direccion) {
		super();
		this.cedulaC = cedulaC;
		this.nombre = nombre;
		this.telefono = telefono;
		this.correo = correo;
		this.direccion = direccion;
	}

	public Long getCedulaC() {
		return cedulaC;
	}

	public void setCedulaC(Long cedulaC) {
		this.cedulaC = cedulaC;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getTelefono() {
		return telefono;
	}

	public void setTelefono(Long telefono) {
		this.telefono = telefono;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	

}
