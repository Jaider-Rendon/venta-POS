package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "Administrador")

public class Administrador {
	@Id
	@Column(name="idAdmin")
	private Long idAdmin;
	
	@Column(name = "clave")
	private Long clave;

	public Administrador() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Administrador(Long idAdmin, Long clave) {
		super();
		this.idAdmin = idAdmin;
		this.clave = clave;
	}

	public Long getIdAdmin() {
		return idAdmin;
	}

	public void setIdAdmin(Long idAdmin) {
		this.idAdmin = idAdmin;
	}

	public Long getClave() {
		return clave;
	}

	public void setClave(Long clave) {
		this.clave = clave;
	}
	

}
