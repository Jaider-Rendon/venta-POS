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
	
	@Column(name="nombre1")
	private String nombre1;
	
	@Column(name="nombre2")
	private String nombre2;
	
	@Column(name="apellido1")
	private String apellido1;
	
	@Column(name="apellido2")
	private String apellido2;
	
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

	public Cliente(Long cedulaC, String nombre1, String nombre2, String apellido1, String apellido2, Long telefono,
			String correo, String direccion) {
		super();
		this.cedulaC = cedulaC;
		this.nombre1 = nombre1;
		this.nombre2 = nombre2;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
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

	public String getNombre1() {
		return nombre1;
	}

	public void setNombre1(String nombre1) {
		this.nombre1 = nombre1;
	}

	public String getNombre2() {
		return nombre2;
	}

	public void setNombre2(String nombre2) {
		this.nombre2 = nombre2;
	}

	public String getApellido1() {
		return apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
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
