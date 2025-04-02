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
@Table(name = "Impuesto")


public class Impuesto {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "idImpuesto")
	    private Long idImpuesto;
	 
	 @Column(name = "nombre")
		private String nombre;
	 
	 @Column(name = "porcentaje")
		private Long claveporcentaje;
	 
	 @ManyToOne
	 @JoinColumn(name = "idAdmin", referencedColumnName = "idAdmin")
	    private  Administrador Administrador;

	public Impuesto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Impuesto(Long idImpuesto, String nombre, Long claveporcentaje,
			com.example.demo.modelo.Administrador administrador) {
		super();
		this.idImpuesto = idImpuesto;
		this.nombre = nombre;
		this.claveporcentaje = claveporcentaje;
		Administrador = administrador;
	}

	public Long getIdImpuesto() {
		return idImpuesto;
	}

	public void setIdImpuesto(Long idImpuesto) {
		this.idImpuesto = idImpuesto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getClaveporcentaje() {
		return claveporcentaje;
	}

	public void setClaveporcentaje(Long claveporcentaje) {
		this.claveporcentaje = claveporcentaje;
	}

	public Administrador getAdministrador() {
		return Administrador;
	}

	public void setAdministrador(Administrador administrador) {
		Administrador = administrador;
	}
	 
}
